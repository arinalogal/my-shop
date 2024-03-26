import { FavoritesApiService } from '@/services';

export function useFavorites () {
    async function onToggleFavorites (params) {
        await FavoritesApiService.toggle(params);

        alert('Товар добавлен в избранное')
    }

    return {
        onToggleFavorites
    };
}