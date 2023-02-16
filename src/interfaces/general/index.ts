import type { Product } from "@models"

export interface ResponseObject {
    code: number
    message: string
    data: [] | object
}

export interface IsStore {
	getCategories(): Promise<[]>
    url:string
    get(): Promise<IsProductObject[]>
    createProduct(obj:object): Promise<Product>
    load(): Promise<void>
}

export interface IsProduct {
    id: number
    title?: string
    description?: string
    price?: number
    discountPercentage?: number
    rating?: number
    stock?: number
    brand?: string
    category?: string
    thumbnail?: string
    images?: string[]
    get():Promise<IsProductObject>
    call():Promise<IsProductObject>
}

export interface IsProductObject {
    id: number
    title?: string
    description?: string
    price?: number
    discountPercentage?: number
    rating?: number
    stock?: number
    brand?: string
    category?: string
    thumbnail?: string
    images?: string[]
}