import { api } from '@/utils';

export class TarelkiApiService {
    static getCart () {
        return api.get('/tarelki');
    }

    static addToCart (params) {
        return api.post('/tarelki', params)
    }

    static changeCount (params) {
        return api.patch(`/tarelki/${params.id}`, {
            quantity: params.quantity
        })
    }

    static changeDelay (params) {
        return api.patch(`/tarelki/${params.id}`, {
            delay: params.delay
        })
    }

    static delete (id) {
        return api.delete(`/tarelki/${id}`);
    }
}