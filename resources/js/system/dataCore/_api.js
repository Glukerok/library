import service from './service';

export default {
    //Books
    async getProduct(id) {
        return await service.get("/api/books/" + id)
    },
    async updateProduct(id, data) {
        return await service.post("/api/books/" + id, data)
    },
    async getBooks(data) {
        return await service.get("/api/books", data)
    },

    //Categories
    async getCategory(id, data) {
        return await service.get("/api/categories/" + id, data)
    },
    async getCategories(data) {
        return await service.get("/api/categories", data)
    },

    //Brands
    async getBrands(data) {
        return await service.get("/api/brands", data)
    },

    //Attrs
    async getAttrsGroup(data) {
        return await service.get("/api/attrs/group", data)
    }

}
