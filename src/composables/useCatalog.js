import { ref } from 'vue';
import { useAuth } from './useAuth';
import { CatalogApiService } from '@/services';

export function useCatalog () {
    const { user } = useAuth();

    const categories = ref([]);

    async function getCatalog () {
        const { data } = await CatalogApiService.getCategories()
            
        categories.value = data;
    }

    async function addProduct (params) {
        await CatalogApiService.addProduct({
            ...params,
            userId: user.value.id,
            isFavorite: false
        });
    }

    return {
        categories,
        getCatalog,
        addProduct
    }
}