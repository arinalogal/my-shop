<template>
    <v-layout-default>
        <v-container>
            <v-row>
                <v-col 
                    v-for="product in products"
                    span="3"
                    md="6"
                    sm="12"
                >
                    <v-catalog-card 
                        :id="product.id"
                        :price="product.price"
                        :images="product.images"
                        :title="product.title"
                        :category="product.categoryId"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-layout-default>
</template>

<script setup>
    import VContainer from '@/components/VContainer.vue';
    import VRow from '@/components/UI/VRow.vue';
    import VCol from '@/components/UI/VCol.vue';
    import VCatalogCard from '@/components/VCatalogCard.vue';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import { useUserProducts } from '@/composables';

    const { products, getUserProducts } = useUserProducts();

    getUserProducts();
</script>