import DB from '$lib/core/endpoints';
import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

const createTableData = () => {

    const random = (min, max) => Math.random() * (max - min) + min;
    const randomTwoDecimal = (min, max) => random(min, max).toFixed(2);
    const randomTwoDecimalNumber = (min, max) => Number(randomTwoDecimal(min, max));
    const base = randomTwoDecimalNumber(13.17, 16.23);

    const table_data = [];
    for (let i = 0; i < 20; i++) {
        table_data.push({
            first: (((i + 1)/2) - .49).toFixed(2),
            second: ((i + 1)/2).toFixed(2),
            price: (base + (i * ((i + 1)/2 * 3))).toFixed(2),
            cwd: 0,
            extra: 0
        });
    }
    return table_data;
};


export const load = (async () => {
    return {
        prices: createTableData()
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    default: async ({ request }) => {
        const prices = Object.fromEntries(await request.formData());
        console.log(prices);
        if (prices) {
            const res = await DB.post('prices', prices)
            if (res) {
                throw redirect(303, '/pricelist');
            }

        }
    }
};