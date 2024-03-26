import { api } from '@/utils';

export class CartApiService {
    static getCart () {
        return api.get('/cart');
    }

    static addToCart (params) {
        return api.post('/cart', params)
    }

    static changeCount (params) {
        return api.patch(`/cart/${params.id}`, {
            quantity: params.quantity
        })
    }

    static changeDelay (params) {
        return api.patch(`/cart/${params.id}`, {
            delay: params.delay
        })
    }

    static delete (id) {
        return api.delete(`/cart/${id}`);
    }
}