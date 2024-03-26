<script setup>
import VCol from "./UI/VCol.vue";
import VRow from "./UI/VRow.vue";
const props = defineProps({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
  },
});
</script>

<template>
  <router-link
    :to="{ name: 'CatalogCategory', params: { category: id } }"
    class="router-as"
  >
    <div class="v-container-card">
      <v-col>
        <p class="title">{{ title }}</p>
        <p class="price">{{ price + "₽" }}</p>
        <v-row justify="center">
          <img :src="image" alt="" :key="id" />
        </v-row>
        <p class="add-button">добавить в корзину</p>
      </v-col>
    </div>
  </router-link>
</template>

<style scoped>
.router-as {
  text-decoration: none;
  color: black;
}

.v-container-card {
  background-color: #f4f4f4;
  padding: 18px 21px 36px 21px;
  margin-bottom: 37px;
  width: 230px;
  text-decoration: none;
}
.title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
}
.price {
  margin-top: 0px;
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: 200;
}
.add-button {
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;
  text-align: center;
}
</style>
