import type { IsProduct, IsProductObject } from "src/interfaces/general"

// import { DB } from '@utils'
class Product implements IsProduct {
    id: number
    title: string
    description: string
    price?: number
    discountPercentage?: number
    rating?: number
    stock?: number
    brand?: string
    category?: string
    thumbnail?: string
    images?: string[]

    constructor(obj:IsProductObject) {
        this.id = obj.id
        this.title = obj.title
        this.description = obj.description
        this.price = obj.price
        this.discountPercentage = obj.discountPercentage
        this.rating= obj.rating
        this.stock= obj.stock
        this.brand= obj.brand
        this.category= obj.category
        this.thumbnail= obj.thumbnail
        this.images= obj.images
    }
    get = async () => {
      return {
        id: this.id,
        title: this.title,
        description: this.description,
        price: this.price,
        discountPercentage: this.discountPercentage,
        rating: this.rating,
        stock: this.stock,
        brand: this.brand,
        category: this.category,
        thumbnail: this.thumbnail,
        images: this.images
      }
    }
}

export default Product
