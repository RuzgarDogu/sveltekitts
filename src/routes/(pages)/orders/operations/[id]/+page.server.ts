import DB from "$lib/core/endpoints";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async ({ request }) => {
        const { awb } = Object.fromEntries(await request.formData()) as unknown as {
			awb: string;
		};
        // await DB.put('cargoes/1', {awb:Number(testing.length)})
    }
};