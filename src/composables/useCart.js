import { ref, computed } from 'vue';
import { CartApiService } from '@/services';

export function useCart () {
    const cart = ref([]);

    const cartDelay = computed(() => cart.value.filter(item => item.delay));
    const cartNotDelay = computed(() => cart.value.filter(item => !item.delay));

    const cartTotalSum = computed(() => {
        return cart.value.reduce((acc, product) => {
            return acc += (product.price * product.quantity);
        }, 0);
    });

    const cartTotalCount = computed(() => {
        return cart.value.reduce((acc, product) => {
            return acc += product.quantity;
        }, 0);
    });

    async function getCart () {
        const { data } = await CartApiService.getCart();
        
        cart.value = data;
    }

    async function onAddToCart (params) {
        await CartApiService.addToCart(params);

        alert('Товар добавлен успешно!');
    }

    async function onChangeCount (params) {
        await CartApiService.changeCount(params)
        await getCart();
    }

    async function onDelete (id) {
        await CartApiService.delete(id)
        await getCart();
    }

    async function onChangeDelay (params) {
        await CartApiService.changeDelay(params)
        await getCart();
    }

    return {
        cartDelay,
        cartNotDelay,
        cartTotalSum,
        cartTotalCount,
        getCart,
        onAddToCart,
        onChangeCount,
        onDelete,
        onChangeDelay
    }
}