export type ProductsListState = Readonly<{
    items: Product[],
    isLoading: boolean
}>

export type Product = Readonly<{
    id: number,
    name: string,
    description: string,
    categoryId: number
}>

export type ProductsState = Readonly<{
    list: ProductsListState
}>