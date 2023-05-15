export interface IInternetStore {
    loading: boolean,
    products: Product[],
    productLoading: boolean,
    currentProduct: Product | null
}

export interface Product {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}
