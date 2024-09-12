export interface Product {
    productId: number,
    name: string,
    price: string,
    desc: string,
    created: string,
    gender: string,
    material: string,
    subCategory: string,
    colorCodes: Array<string>,
    colorNames: Array<string>,
    imageUrl: string,
}

export const initialProductState: Product = {
    productId: 0,
    name: '',
    price: '',
    desc: '',
    created: '',
    gender: '',
    material: '',
    subCategory: '',
    colorCodes: [],
    colorNames: [],
    imageUrl: '',
}