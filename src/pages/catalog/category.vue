<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import VContainer from "@/components/VContainer.vue";
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";

const route = useRoute();
const router = useRouter();

const filter = ref({
  brand: route.query.brand,
  color: route.query.color,
});

function generateRandomNumber() {
  // Генерируем случайное число от 1 до 3
  return Math.floor(Math.random() * 3) + 1;
}

const id =
  route.params.category == 1
    ? 0
    : route.params.category == 2
    ? 1
    : route.params.category == 3
    ? 2
    : 1;

const itemList = [
  {
    image: "/src/assets/images/tarelkabig1.svg",
    collection: "kuroi",
    title: "Тарелка «Сундо», 12 см",
    price: "2 000 ₽",
    desc: "Тарелка выполнена из прочного материала, который позволит Вам всегда наслаждаться трапезой вместе с нашим товаром. Тарелка «Сундо» отлично подойдет для сервировки плотных блюд.",
  },
  {
    image: "/src/assets/images/tarelkabig2.svg",
    collection: "sundo",
    title: "Набор «Эйпуриру», 9-22 см",
    price: "14 299 ₽",
    desc: "Обеденная тарелка «Эйпуриру» отлично подойдет для летнего застолья. Тарелка выполнена в нежных летних цветах, оформлена в гибкую форму, имитируя кувшинку.",
  },
  {
    image: "/src/assets/images/tarelkabig3.svg",
    collection: "kuroi",
    title: "Набор 2 миски, 2 тералки «Токеру», 12 - 16 см",
    price: "6 000 ₽",
    desc: "Не подходит для использования в микроволновой печи. Рекомендуется мыть вручную с применением мягких моющих средств. Не использовать для ухода абразивные чистящие средства и жесткие губки.",
  },
];

function backPage() {
  router.back();
}
</script>

<template>
  <VLayoutDefault>
    <VContainer class="main">
      <v-row class="custom-container">
        <v-col class="left">
          <v-row>
            <button class="back-button" :onclick="backPage">
              <img src="@/assets/icons/back.svg" alt="" />
            </button>
          </v-row>
          <v-row class="image-container" justify="center">
            <img :src="itemList[id].image" alt="" :key="image" />
          </v-row>
          <v-row class="card-dilivery-info" justify="beetwen">
            <span class="card-dilivery-text">
              Доставка по всей территории РФ
            </span>
            <span class="card-dilivery-text">Гарантия качетсва продукции</span>
            <span class="card-dilivery-text">
              Бесплатная доставка от 3000 ₽
            </span>
          </v-row>
          <v-row>
            <span class="company-info start">
              © kitchin, 2024 BarNeo Professional (v. 3.384)
            </span>
          </v-row>
          <v-row>
            <span class="company-info">
              Профессиональное оборудование для ресторанов, кафе, баров,
              общепита.
            </span>
          </v-row>
        </v-col>
        <v-col class="right">
          <div class="item-info-container">
            <p class="collection-info">{{ itemList[id].collection }}</p>
            <p class="title">{{ itemList[id].title }}</p>
            <p class="price">{{ itemList[id].price }}</p>
            <p class="desc">{{ itemList[id].desc }}</p>
            <button class="folder-button">добавить в коризну</button>
            <p></p>
            <button class="all-button">
              просмотреть все товары из коллекции
            </button>
          </div>
        </v-col>
      </v-row>
    </VContainer>
  </VLayoutDefault>
</template>

<style scoped>
.all-button {
  margin-top: 100px;
  background-color: transparent;
  border: 0.5px solid black;
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  font-weight: 300;
  font-size: 15px;
}

.folder-button {
  background-color: black;
  border: none;
  padding: 10px;
  color: white;
  font-size: 15px;
  font-weight: 300;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
}

.desc {
  margin-top: 20px;
  font-size: 15px;
  margin-bottom: 60px;
}

.price {
  font-weight: 200;
  font-size: 25px;
}

.title {
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 20px;
}

.collection-info {
  font-style: italic;
  font-size: 20px;
}

.company-info {
  font-size: 13px;
  font-weight: 300;
  margin-left: 70px;
  margin-top: 10px;
}

.company-info.start {
  margin-top: 40px;
}

.card-dilivery-text {
  font-size: 15px;
  font-weight: 200;
  width: 180px;
}

.card-dilivery-info {
  margin-top: 100px;
  margin-left: 70px;
}

.main {
  padding-top: 40px;
  padding-bottom: 70px;
  background-color: white;
}
.left {
  flex: 3;
}
.right {
  flex: 2;
  display: flex;
  align-items: center;
}
.back-button {
  border: none;
  background-color: transparent;
  margin-left: 70px;
  cursor: pointer;
}
.image-container {
  margin-top: 100px;
}
</style>
