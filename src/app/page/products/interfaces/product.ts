export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    categoryId: number;
    stock: number;
    //interrogación es opcional
    qty?: number;
}
