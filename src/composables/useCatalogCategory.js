import { ref } from 'vue';
import { CatalogApiService } from '@/services';

export function useCatalogCategory () {
    const products = ref([]);

    const pagination = ref({
        currentPage: 0,
        perPage: 0,
        total: 0,
        pageCount: 0
    });

    function calculatePagination (total, page) {
        pagination.value.total = parseInt(total);

        pagination.value.currentPage = page;

        pagination.value.perPage = 6;

        pagination.value.pageCount = Math.ceil(pagination.value.total / pagination.value.perPage);
    }

    async function getProductsCategory (id, params) {
        const { data, headers } = await CatalogApiService.getCategory(id, params);

        calculatePagination(headers.get('x-total-count'), params._page);

        products.value = data;
    }

    return {
        products,
        pagination,
        getProductsCategory
    }
}