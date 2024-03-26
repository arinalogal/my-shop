<template>
    <v-layout-default>
        <v-container v-if="product">
            <v-row>
                <v-col span="7">
                    <VCatalogDetailGallery :images="product.images"/>
                </v-col>

                <v-col span="5">
                    <h3>{{ product.title }}</h3>

                    <div>
                        {{ formattedPrice }}
                    </div>

                    <br>

                    <div>
                        {{ product.description }}
                    </div>

                    <v-row>
                        <v-col span="6">
                            <v-button
                                theme="primary"
                                size="large"
                                wide
                                @click="onAddToCart({
                                    ...product,
                                    quantity: 1
                                })"
                            >
                                Добавить в корзину
                            </v-button>
                        </v-col>

                        <v-col span="6">
                            <v-button
                                :theme="currentThemeFavoriteButton"
                                size="large"
                                wide
                                @click="onToggleFavorites({
                                    id: product.id,
                                    isFavorites: !product.isFavorites
                                })"
                            >
                                {{ product.isFavorites ? 'Удалить из избранного' : 'Добавить в избранное' }}
                            </v-button>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </v-layout-default>
</template>

<script setup>
    import { ref, computed } from 'vue';
    import { priceFormat } from '@/utils';
    import { useRoute } from "vue-router";
    import { CatalogApiService } from '@/services';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VButton from '@/components/UI/VButton.vue';
    import VContainer from '@/components/VContainer.vue';
    import VCatalogDetailGallery from '@/components/VCatalogDetailGallery.vue';
    import { useCart, useFavorites } from '@/composables';

    const route = useRoute();
    const { onAddToCart } = useCart();
    const { onToggleFavorites } = useFavorites();

    const product = ref();

    const formattedPrice = computed(() => priceFormat(product.value.price));

    const currentThemeFavoriteButton = computed(() => {
        return product.value.isFavorites
            ? 'danger'
            : 'success'
    });

    CatalogApiService.getProduct(route.params.id)
        .then(data => {
            product.value = data;
        });
</script>