import { OrdersApiService, CartApiService } from '@/services';
import { useAuth } from './useAuth';
 
export function useOrdering () {
    const { user } = useAuth();

    async function createOrder (params) {
        const { data } = await CartApiService.getCart();

        await OrdersApiService.createOrder({
            ...params,
            products: cart,
            userId: user.value.id
        });
    }

    return {
        createOrder
    };
}