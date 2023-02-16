import { APIURL } from "@config"
import type { IsStore } from "@interfaces"
import type { IsProductObject } from "src/interfaces/general"
import { Product } from '@models'
import DB from "$lib/core/endpoints"

class StoreClass implements IsStore {
    url:string
    products: Product[]

    constructor(url:string) {
        this.url = url
        this.products = []
    }
    load = async () => {
        const products = await DB.get('/products?limit='+11)
        for (const product of products.products) {
            this.products = [...this.products, new Product(product)]
        }
    }
    get = async () => {
        // EĞER Obje olarak gönderecek ise aşağıdaki metodu uygulayabiliriz.
        let products:IsProductObject[] = []
        for (const product of this.products) {
            const p = await product.call()
            products = [{...p}, ...products]
        }
        return products
    }
    getCategories = async ():Promise<[]> => {
        return DB.get('products/categories')
    }
    createProduct = async (obj:object) => {
        const response = await DB.post('/products/add',obj)
        const newProduct = new Product(response)
        this.products = [...this.products, newProduct]
        return newProduct
    }
}

export const Store:IsStore = new StoreClass(APIURL)
Store.load()
