<template>
  <v-layout-default>
    <v-container>
      <v-main-action />
      <v-info-banner />
      <v-main-cards />
    </v-container>
  </v-layout-default>
</template>

<script setup>
import { useCatalogCategory, useFavorites, useCart } from "@/composables";
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VCatalogCard from "@/components/VCatalogCard.vue";
import VMainAction from "@/components/VMainAction.vue";
import VInfoBanner from "@/components/VInfoBanner.vue";
import VMainCards from "@/components/VMainCards.vue";

const { onToggleFavorites } = useFavorites();
const { onAddToCart } = useCart();

const {
  products: smartphones,
  getProductsCategory: getProductsCategorySmartphones,
} = useCatalogCategory();

const { products: laptops, getProductsCategory: getProductsCategoryLaptops } =
  useCatalogCategory();

getProductsCategorySmartphones(1);
getProductsCategoryLaptops(2);
</script>
