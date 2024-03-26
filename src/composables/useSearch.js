import { ref } from 'vue'
import { SearchApiService } from '@/services'

export function useSearch () {
    const products = ref([]);
    const isLoading = ref(false);

    async function getSearch (query) {
        isLoading.value = true;

        const { data } = await SearchApiService.getSearch(query);
            
        products.value = data;

        isLoading.value = false;
    }

    return {
        products,
        isLoading,
        getSearch
    }
}