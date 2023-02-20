import { APIURL } from "@config"
import type { IsStore } from "@interfaces"
import type { IsProduct, IsProductObject } from "src/interfaces/general"
import { Product } from '@models'
import DB from "$lib/core/endpoints"

class StoreClass implements IsStore {
    url:URL
    products: Product[]

    constructor(url:URL) {
        this.url = url
        this.products = []
    }
    load = async (count=11, offset=0) => {
        const products = await DB.get('/products?_limit='+count+'&_offet='+offset)
        for (const product of products) {
            this.products = [...this.products, new Product(product)]
        }
    }
    get = async (count = 1) => {
        const len = this.products.length
        if (len < count) {
            await this.load((count - len), (len - 1))
        }
        let products:IsProductObject[] = []
        for (const product of this.products) {
            const p = await product.call()
            products = [{...p}, ...products]
        }
        return products
    }
    getCategories = async ():Promise<[]> => {
        return DB.get('/category')
    }
    createProduct(obj: IsProductObject): Promise<IsProduct> {
        return new Promise((resolve, reject) => {
            DB.post('/products/add',obj)
            .then(response => {
                obj.id = response.id
                const newProduct = new Product(obj)
                this.products = [...this.products, newProduct]
                resolve(newProduct)
            })
            .catch(err => {
                reject(err)
            })
        })
    }
    // createProduct(obj: IsProductObject): Promise<IsProduct> {
    //     const response = DB.post('/products/add',obj)
    //     obj.id = response.id
    //     const newProduct = new Product(obj)
    //     this.products = [...this.products, newProduct]
    //     return newProduct
    // }
    // createProduct = async (obj:IsProductObject) => {
    //     const response = await DB.post('/products/add',obj)
    //     const newProduct = new Product(response)
    //     this.products = [...this.products, newProduct]
    //     return newProduct
    // }
}

export const Store:IsStore = new StoreClass(APIURL)
// Store.load()
