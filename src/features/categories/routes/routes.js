const layoutLink = (id) => `/categories/${id}`;

export default {
    list: "/categories",
    create: "/categories/create",
    categoryLayout: layoutLink,
    details: (id) => `${layoutLink(id)}/details`,
    edit: (id) => `${layoutLink(id)}/edit`,
}
