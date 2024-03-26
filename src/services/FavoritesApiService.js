import { api } from '@/utils';

export class FavoritesApiService {
    static toggle (params) {
        return api.patch(`/products/${params.id}`, {
            isFavorites: params.isFavorites
        });
    }
}