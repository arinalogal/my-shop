<script setup>
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
import VContainerCard from "./VContainerCard.vue";

const rec1 = [
  {
    id: 26,
    title: "Набор «Широи»",
    price: 5450,
    image: "/src/assets/images/rec1.svg",
  },
  {
    id: 27,
    title: "Кружки «Гю», 150-250 мл",
    price: 3999,
    image: "/src/assets/images/rec2.svg",
  },
];
const rec2 = [
  {
    id: 28,
    title: "Кружка «Сора»",
    price: 1100,
    image: "/src/assets/images/rec3.svg",
  },
  {
    id: 29,
    title: "Приборы «Дарк»",
    price: 4399,
    image: "/src/assets/images/rec4.svg",
  },
];
const rec3 = [
  {
    id: 30,
    title: "Тарелка «Шигацу»",
    price: 2299,
    image: "/src/assets/images/rec5.svg",
  },
  {
    id: 31,
    title: "Кружка «Цуки»",
    price: 1500,
    image: "/src/assets/images/rec6.svg",
  },
];
const rec4 = [
  {
    id: 32,
    title: "Тарелка «Ки»",
    price: 1000,
    image: "/src/assets/images/rec7.svg",
  },
  {
    id: 33,
    title: "Тарелка «Оки»",
    price: 4999,
    image: "/src/assets/images/rec8.svg",
  },
];
const rec5 = [
  {
    id: 34,
    title: "Приборы «Трио»",
    price: 3500,
    image: "/src/assets/images/rec9.svg",
  },
  {
    id: 35,
    title: "Тарелка «Флюид»",
    price: 2000,
    image: "/src/assets/images/rec10.svg",
  },
];
</script>

<template>
  <v-row>
    <span class="header">Вам так же может понравиться</span>
  </v-row>
  <v-row class="recomendation">
    <v-col>
      <VContainerCard
        v-for="rec in rec1"
        :id="rec.id"
        :title="rec.title"
        :price="rec.price"
        :image="rec.image"
      />
    </v-col>
    <v-col>
      <VContainerCard
        v-for="rec in rec2"
        :id="rec.id"
        :title="rec.title"
        :price="rec.price"
        :image="rec.image"
      />
    </v-col>
    <v-col>
      <VContainerCard
        v-for="rec in rec3"
        :id="rec.id"
        :title="rec.title"
        :price="rec.price"
        :image="rec.image"
      />
    </v-col>
    <v-col>
      <VContainerCard
        v-for="rec in rec4"
        :id="rec.id"
        :title="rec.title"
        :price="rec.price"
        :image="rec.image"
      />
    </v-col>
    <v-col>
      <VContainerCard
        v-for="rec in rec5"
        :id="rec.id"
        :title="rec.title"
        :price="rec.price"
        :image="rec.image"
      />
    </v-col>
  </v-row>
</template>

<style scoped>
.header {
  font-size: 45px;
  font-weight: 500;
  margin: 150px 0px 80px 80px;
}
.recomendation {
  margin-left: 80px;
}
</style>
