import { ref } from 'vue';
import { CatalogApiService } from '@/services';
import { useAuth } from './useAuth';

export function useUserProducts () {
    const { user } = useAuth();

    const products = ref([]);

    async function getUserProducts () {
        const { data } = await CatalogApiService.getUserProducts(user.value.id)
            
        products.value = data;
    }

    return {
        products,
        getUserProducts
    }
}