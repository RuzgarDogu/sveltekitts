import type { PageLoad } from './$types';
import  DB  from '$lib/core/endpoints';
let countries = [], page = 0;
export const load = (async ({depends}) => {
    depends('loadmore')
    page++;
    let res = await DB.get('/countries',{
        _limit: 10,
        _page: page
    })
    if(res.length === 0) return {countries}
    console.log(page)
    res = res.map((country: { code: string; }) => {
        const flag = {flag: "https://flag.muratoner.net/?country=" + country.code.toLowerCase()}
        return {...country, ...flag}
    })
    countries = [...countries, ...res]
    return {
        countries
    };
}) satisfies PageLoad;