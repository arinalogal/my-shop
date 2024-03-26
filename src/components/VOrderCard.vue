<script setup>
import VCol from "./UI/VCol.vue";
import VRow from "./UI/VRow.vue";
</script>

<template>
  <div class="v-order-card">
    <v-row align="center">
      <img src="@/assets/images/order1.svg" alt="" class="image" />
      <div class="order-info">
        <p class="title">Тарелка «Сундо», 28 см</p>
        <p class="desc">
          Плоская тарелка из японской керамики, тарелка для основных блюд
        </p>
        <button class="delete-button">Убрать из корзины</button>
      </div>
      <div class="order-price-info">
        <v-row align="center">
          <button class="order-button">-</button>
          <span class="oredr-count">1</span>
          <button class="order-button">+</button>
          <span class="order-price">7 000 ₽</span>
        </v-row>
      </div>
    </v-row>
    <v-row justify="end" class="price-information">
      <v-col>
        <p class="discount">Скидка 20%</p>
        <span class="order-result-price">5 600 ₽</span>
        <span class="order-old-price">7 000</span>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.v-order-card {
  padding: 71px 30px 30px 30px;
  background-color: #f4f4f4;
  margin: 40px 0px 30px 80px;
}
.order-info {
  margin-left: 50px;
  text-align: left;
  width: 250px;
}
.title {
  font-size: 20px;
  font-family: "Cormorant", serif;
  font-weight: 700;
}
.desc {
  font-size: 15px;
  font-family: "Cormorant", serif;
}
.delete-button {
  border: none;
  text-decoration: underline;
  font-family: "Montserrat", sans-serif;
  font-size: 13px;
  background-color: transparent;
  margin: 0;
  padding: 0;
  cursor: pointer;
}
.order-price-info {
  margin: 0px 40px;
}
.order-button {
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  font-size: 30px;
  margin: 0px 10px;
}
.oredr-count {
  font-family: "Fahkwang", sans-serif;
  padding: 5px 20px;
  font-weight: 200;
  border: 0.2px solid black;
}
.older-price {
  font-family: "Fahkwang", sans-serif;
  font-size: 20px;
  font-weight: 200;
}
.discount {
  color: #9d9d9d;
  font-weight: 300;
  font-size: 15px;
  margin-bottom: 10px;
}
.order-result-price {
  font-weight: 200;
  font-size: 20px;
  margin-right: 15px;
}
.order-old-price {
  font-size: 20px;
  text-decoration: line-through;
  font-weight: 200;
}
.price-information {
  margin-right: 100px;
}
</style>
