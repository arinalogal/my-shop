<script setup>
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useSearch, useCart } from "@/composables";
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VCatalogCard from "@/components/VCatalogCard.vue";
import VRow from "@/components/UI/VRow.vue";
import VHitSales from "@/components/VHitSales.vue";
import VHitsRecomendation from "@/components/VHitsRecomendation.vue";
</script>

<template>
  <v-layout-default>
    <v-container class="container">
      <v-row>
        <span class="header">Хиты продаж</span>
      </v-row>
      <v-hit-sales />
      <v-hits-recomendation></v-hits-recomendation>
    </v-container>
  </v-layout-default>
</template>

<style scoped>
.header {
  font-size: 45px;
  font-weight: 500;
  margin: 80px;
}
.container {
  background-color: white;
}
</style>
