export default {
    create: (categoryId: number) => `/categories/${categoryId}/products/create`,
    edit: (categoryId: number, productId: number) => `/categories/${categoryId}/products/${productId}/edit`
}