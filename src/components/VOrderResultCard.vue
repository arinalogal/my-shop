<script setup>
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
</script>

<template>
  <div class="v-order-result-card">
    <v-row class="order-result-price-bloc">
      <span class="order-price-text">Стоимость товара</span>
      <span class="folder"> </span>
      <span class="result-order-price-number">7 000 ₽</span>
    </v-row>
    <v-row class="order-result-price-bloc">
      <span class="order-price-text">Скидка</span>
      <span class="folder"> </span>
      <span class="result-order-price-number">1 400 ₽</span>
    </v-row>
    <v-row class="order-result-price-bloc">
      <span class="order-price-text">Итого</span>
      <span class="folder"> </span>
      <span class="result-order-price-number">5 600 ₽</span>
    </v-row>
    <div class="promocode">
      <input type="text" class="textfield" placeholder="Ввести промокод" />
    </div>
    <router-link to="/delivery">
      <button class="confrim-button">Оформить заказ</button>
    </router-link>
  </div>
</template>

<style scoped>
.v-order-result-card {
  margin-top: 40px;
  background-color: #f4f4f4;
  width: 519px;
  padding: 56px 60px 72px 66px;
  margin-bottom: 40px;
}
.folder {
  flex: 1;
}
.order-result-price-bloc {
  margin-bottom: 15px;
}
.order-price-text {
  font-weight: 200;
  font-size: 15px;
}
.result-order-price-number {
  font-family: "Fahkwang", sans-serif;
  font-weight: 200;
  font-size: 15px;
}
.promocode {
  padding: 15px 10px;
  margin-top: 40px;
  font-family: "Montserrat", sans-serif;
  background-color: transparent;
  border: 0.5px solid black;
}
.confrim-button {
  margin-top: 40px;
  font-family: "Montserrat", sans-serif;
  background-color: black;
  padding: 15px 20px;
  border: none;
  color: white;
  font-weight: 300;
  font-size: 15px;
  cursor: pointer;
}
</style>
