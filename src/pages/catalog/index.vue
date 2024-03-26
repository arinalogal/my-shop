<script setup>
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VContainerCard from "@/components/VContainerCard.vue";

const mugs1 = [
  {
    id: 16,
    title: "Кружка «Томари»",
    price: 1450,
    image: "/src/assets/images/mug1.svg",
  },
  {
    id: 17,
    title: "Кружки «Гю», 150-250 мл",
    price: 3999,
    image: "/src/assets/images/mug2.svg",
  },
];
const mug2 = [
  {
    id: 18,
    title: "Кружка «Сора»",
    price: 1100,
    image: "/src/assets/images/mug3.svg",
  },
  {
    id: 19,
    title: "Кружка «Райн»",
    price: 1399,
    image: "/src/assets/images/mug4.svg",
  },
];
const mug3 = [
  {
    id: 20,
    title: "Бокал «Орандж»",
    price: 2000,
    image: "/src/assets/images/mug5.svg",
  },
  {
    id: 21,
    title: "Кружка «Цуки»",
    price: 1500,
    image: "/src/assets/images/mug6.svg",
  },
];
const mug4 = [
  {
    id: 22,
    title: "Кружка «Остров»",
    price: 1600,
    image: "/src/assets/images/mug7.svg",
  },
  {
    id: 23,
    title: "Кружка «Ака»",
    price: 1800,
    image: "/src/assets/images/mug8.svg",
  },
];
const mug5 = [
  {
    id: 24,
    title: "Бокал «Сатто»",
    price: 1300,
    image: "/src/assets/images/mug9.svg",
  },
  {
    id: 25,
    title: "Тарелка «О’ча»",
    price: 2000,
    image: "/src/assets/images/mug10.svg",
  },
];
const mugs = [mugs1, mug2, mug3, mug4, mug5];
</script>

<template>
  <v-layout-default>
    <v-container class="container">
      <v-row>
        <span class="header">Стаканы/кружки/бокалы</span>
      </v-row>
      <v-row class="mugs">
        <v-col>
          <v-container-card
            v-for="mug in mugs1"
            :id="mug.id"
            :title="mug.title"
            :price="mug.price"
            :image="mug.image"
          />
        </v-col>
        <v-col>
          <v-container-card
            v-for="mug in mug2"
            :id="mug.id"
            :title="mug.title"
            :price="mug.price"
            :image="mug.image"
          />
        </v-col>
        <v-col>
          <v-container-card
            v-for="mug in mug3"
            :id="mug.id"
            :title="mug.title"
            :price="mug.price"
            :image="mug.image"
          />
        </v-col>
        <v-col>
          <v-container-card
            v-for="mug in mug4"
            :id="mug.id"
            :title="mug.title"
            :price="mug.price"
            :image="mug.image"
          />
        </v-col>
        <v-col>
          <v-container-card
            v-for="mug in mug5"
            :id="mug.id"
            :title="mug.title"
            :price="mug.price"
            :image="mug.image"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-layout-default>
</template>

<style scoped>
.header {
  margin: 80px;
  font-size: 45px;
  font-weight: 500;
}
.container {
  background-color: white;
}
.mugs {
  margin-left: 80px;
}
</style>
