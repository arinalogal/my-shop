import { api } from '@/utils';

export class OrdersApiService {
    static createOrder (params) {
        return api.post('/orders', params);
    }
}