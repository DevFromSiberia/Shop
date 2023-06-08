//Comments types
export interface IComment {
  id: string
  name: string
  email: string
  body: string
  productId: string
}
//Products types
export interface IProduct {
  id: string
  title: string
  description: string
  price: number
  comments?: IComment[]
  images?: IImage[]
  thumbnail?: IImage
}

export interface IProductFilterPayload {
  title?: string
  description?: string
  priceFrom?: number
  priceTo?: number
}

//Images types
export interface IImage {
  id: string
  productId: string
  main: boolean
  url: string
}

// Auth types
export interface IAuthRequisites {
  username: string
  password: string
}
