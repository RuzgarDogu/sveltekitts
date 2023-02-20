export interface ResponseObject {
    code: number
    message: string
    data: [] | object
}

export interface IsStore {
    url:URL
	getCategories(): Promise<[]>
    get(): Promise<IsProductObject[]>
    createProduct(obj:IsProductObject): Promise<IsProduct>
    load(): Promise<void>
}

export interface IsProduct extends IsProductObject {
    get():Promise<IsProductObject>
    call():Promise<IsProductObject>
    init():Promise<void>
    display():void
    edit():void
    update():Promise<IsProduct>
    addWishlist():void
}

export interface IsProductObject {
    id: number
    title?: string
    description?: string
    price?: number
    rating?: number
    isActive?: number
    category?: number
    image?: URL
    createdAt?: string
}