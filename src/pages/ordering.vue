<script setup>
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VOrderCard from "@/components/VOrderCard.vue";
import VOrderResultCard from "@/components/VOrderResultCard.vue";
import VContainerCard from "@/components/VContainerCard.vue";
const likes = [
  {
    id: 36,
    title: "Тарелка «Дзен», 14 см",
    price: 3400,
    image: "/src/assets/images/like1.svg",
  },
  {
    id: 37,
    title: "Тарелка «Брауни», 14 см",
    price: 2500,
    image: "/src/assets/images/like2.svg",
  },
];
</script>

<template>
  <v-layout-default>
    <v-container class="container">
      <v-row class="order-containder">
        <v-row class="folder">
          <v-col>
            <span class="header">Корзина</span>
            <v-row>
              <v-order-card />
            </v-row>
          </v-col>
        </v-row>
        <v-row class="result">
          <v-col>
            <span class="header right">Итог</span>
            <v-order-result-card />
            <span class="header right">Вам может понравиться</span>
            <v-row justify="beetwen">
              <v-row>
                <v-container-card
                  v-for="like in likes"
                  :id="like.id"
                  :title="like.title"
                  :price="like.price"
                  :image="like.image"
                  class="like-card"
                />
              </v-row>
              <img src="@/assets/images/arrow.svg" alt="" />
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-layout-default>
</template>

<style scoped>
.container {
  background-color: white;
  padding-top: 60px;
}
.folder {
  flex: 3;
}
.result {
  flex: 2;
}
.header {
  font-size: 45px;
  font-weight: 500;
  margin-left: 80px;
}
.header.right {
  margin-left: 0;
}
.like-card {
  margin-right: 15px;
  margin-top: 30px;
}
</style>
