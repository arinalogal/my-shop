<script setup>
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VContainerCard from "@/components/VContainerCard.vue";

const tarelki1 = [
  {
    id: 4,
    title: "Набор «Тотемо»",
    price: 7000,
    image: "/src/assets/images/tarelka1.svg",
  },
  {
    id: 97,
    title: "Тарелка «Эдо», 12 см",
    price: 3999,
    image: "/src/assets/images/tarelka2.svg",
  },
  {
    id: 98,
    title: "Тарелка «Цки», 16 см",
    price: 1899,
    image: "/src/assets/images/tarelka3.svg",
  },
];
const tarelki2 = [
  {
    id: 3,
    title: "2 миски, 2 тарелки  «Такеру»",
    price: 6000,
    image: "/src/assets/images/tarelka4.svg",
  },
  {
    id: 5,
    title: "Набор «Турио»",
    price: 3999,
    image: "/src/assets/images/tarelka5.svg",
  },
  {
    id: 6,
    title: "Тарелка «Уми»",
    price: 5000,
    image: "/src/assets/images/tarelka6.svg",
  },
];
const tarelki3 = [
  {
    id: 2,
    title: "Набор «Эйпуриру»",
    price: 14299,
    image: "/src/assets/images/tarelka7.svg",
  },
  {
    id: 8,
    title: "Тарелка «Брауни»",
    price: 2500,
    image: "/src/assets/images/tarelka8.svg",
  },
  {
    id: 9,
    title: "Тарелка «О’кане»",
    price: 3400,
    image: "/src/assets/images/tarelka9.svg",
  },
];
const tarelki4 = [
  {
    id: 1,
    title: "Тарелка «Сундо»",
    price: 2000,
    image: "/src/assets/images/tarelka10.svg",
  },
  {
    id: 11,
    title: "Тарелка «Оки»",
    price: 4999,
    image: "/src/assets/images/tarelka11.svg",
  },
  {
    id: 12,
    title: "Тарелка «Дзен»",
    price: 3400,
    image: "/src/assets/images/tarelka12.svg",
  },
];
const tarelki5 = [
  {
    id: 13,
    title: "Тарелка «Сундо»",
    price: 2000,
    image: "/src/assets/images/tarelka13.svg",
  },
  {
    id: 14,
    title: "Тарелка «Оки»",
    price: 4999,
    image: "/src/assets/images/tarelka14.svg",
  },
  {
    id: 15,
    title: "Тарелка «Дзен»",
    price: 3400,
    image: "/src/assets/images/tarelka15.svg",
  },
];
</script>

<template>
  <div class="container">
    <div class="card-review">
      <v-row class="selector">
        <span class="action-button active">тарелки</span>
        <span class="action-button">приборы</span>
        <span class="action-button">миски</span>
        <span class="action-button">стаканы/кружки/бокалы</span>
      </v-row>
      <v-row class="cards">
        <v-col class="card-bloc">
          <v-container-card
            v-for="tarelka in tarelki1"
            :id="tarelka.id"
            :title="tarelka.title"
            :price="tarelka.price"
            :image="tarelka.image"
          />
        </v-col>
        <v-col class="card-bloc">
          <v-container-card
            v-for="tarelka in tarelki2"
            :id="tarelka.id"
            :title="tarelka.title"
            :price="tarelka.price"
            :image="tarelka.image"
          />
        </v-col>
        <v-col class="card-bloc">
          <v-container-card
            v-for="tarelka in tarelki3"
            :id="tarelka.id"
            :title="tarelka.title"
            :price="tarelka.price"
            :image="tarelka.image"
          />
        </v-col>
        <v-col class="card-bloc">
          <v-container-card
            v-for="tarelka in tarelki4"
            :id="tarelka.id"
            :title="tarelka.title"
            :price="tarelka.price"
            :image="tarelka.image"
          />
        </v-col>
        <v-col class="card-bloc">
          <v-container-card
            v-for="tarelka in tarelki5"
            :id="tarelka.id"
            :title="tarelka.title"
            :price="tarelka.price"
            :image="tarelka.image"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <span class="more-button">Загрузить больше</span>
      </v-row>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: white;
  padding-top: 138px;
  padding-bottom: 192px;
}
.card-review {
  margin: 0px 0px 0px 80px;
}
.cards {
  margin-top: 40px;
  list-style-type: none;
  padding: 0;
}
.action-button {
  font-size: 15px;
  font-weight: 300;
  margin-right: 35px;
  cursor: pointer;
}
.action-button.active {
  font-weight: 600;
}
.more-button {
  margin-top: 40px;
  font-size: 15px;
  font-weight: 300;
  padding: 10px 10px;
  border: 0.5px solid black;
  cursor: pointer;
}
</style>
