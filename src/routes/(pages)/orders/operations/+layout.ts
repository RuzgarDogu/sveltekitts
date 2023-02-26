import type { LayoutLoad } from './$types';
import DB from '$lib/core/endpoints';
import type { IsOrderObject } from '@interfaces';

const carriers = [
    "Locton İç ve Dış Ltd A.Ş."
]

const countries = ["Türkiye","Almanya","Fransa","İtalya","Rusya","İran","İspanya","İngiltere","A.B.D."]

const types = ["Fedex-TNT-Express","DHL-Express","UPS-Express","MNG-Kargo","Yurtiçi-Kargo","Aras-Kargo","PTT-Kargo","Sürat-Kargo"]
const sender = "Mia Tarım Ürünleri İthalat İhracat AŞ"


export const load = (async ({parent}) => {
    const data = await parent()
    let cargo_orders = await DB.get('cargoes')
    cargo_orders = cargo_orders.map((cargo: any) => {
        const cargo_order = data.orders.find((order: IsOrderObject) => order.id === cargo.order_id)
        return {...cargo, ...cargo_order}
    })

    return {
        cargo_orders 
    };
}) satisfies LayoutLoad;