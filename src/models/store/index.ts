import { APIURL } from "@config"
import type { IsStore } from "@interfaces"
import type { IsProduct, IsProductObject, IsCategory } from "@interfaces"
import { Product } from '@models'
import DB from "$lib/core/endpoints"

class StoreClass implements IsStore {
    url:string
    products: Product[]

    constructor(url:string) {
        this.url = url
        this.products = []
    }
    load = async (count=11, offset=0) => {
        const products = await DB.get('/products?_limit='+count+'&_offset='+offset)
        for (const product of products) {
            this.products = [...this.products, new Product(product)]
        }
    }
    get = async (count = 1) => {
        const len = this.products.length
        if (len < count) {
            await this.load((count - len), (len - 1))
        }
        return this.products
    }
    getCategories = async ():Promise<IsCategory[]> => {
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
}

export const Store:IsStore = new StoreClass(APIURL)
