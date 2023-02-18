import DB from "$lib/core/endpoints"
import type { IsProduct, IsProductObject } from "src/interfaces/general"

// import { DB } from '@utils'
class Product implements IsProduct {
    id: number
    title?: string
    description?: string
    price?: number
    rating?: number
    isActive?: number
    category?: number
    image?: URL
    createdAt?: string

    constructor(obj:IsProductObject) {
        this.id = obj.id
        this.title = obj.title
        this.description = obj.description
        this.price = obj.price
        this.rating= obj.rating
        this.isActive= obj.isActive
        this.category= obj.category
        this.image= obj.image
        this.createdAt= obj.createdAt
    }
    get = async () => {
      return await DB.get('/products/'+this.id)
    }
    init = async () => {
      const p = await this.get()
      this.id = p.id
      this.title = p.title
      this.description = p.description
      this.price = p.price
      this.rating= p.rating
      this.isActive= p.isActive
      this.category= p.category
      this.image= p.image
      this.createdAt= p.createdAt
    }
    call = async () => {
      return {
        id: this.id,
        title: this.title ,
        description: this.description ,
        price: this.price ,
        rating: this.rating,
        isActive: this.isActive,
        category: this.category,
        image: this.image,
        createdAt: this.createdAt
      }
    }
    display = () => {
      window.location = '/products/'+this.id
    }
    edit = () => {
      window.location = '/products/edit/'+this.id
    }
    addWishlist = (e) => {
      e.currentTarget.classList.toggle('wishlistAdded')
      let wishlist:number[] = localStorage.getItem('wishlist')?.split(',').map(w => Number(w)) || []
      wishlist = [...wishlist,this.id]
      localStorage.setItem('wishlist',wishlist.join(','))
    }
}

export default Product
