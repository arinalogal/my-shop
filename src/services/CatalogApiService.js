import { api } from '@/utils';

export class CatalogApiService {
    static getCategories () {
        return api.get('/categories');
    }

    static getCategory (id, params) {
        return api.get('/products', {
            _page: 1,
            ...params,
            categoryId: id,
            _limit: 6
        });
    }

    static getProduct (id) {
        return api.get(`/products/${id}`);
    }

    static addProduct (params) {
        return api.post('/products', params);
    }

    static getUserProducts (userId) {
        return api.get(`/my-products/${userId}`);
    }
}