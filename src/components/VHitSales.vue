<script setup>
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
</script>

<template>
  <v-row class="v-hit-sales">
    <v-row class="hit-image" justify="end">
      <img src="@/assets/images/hit_sales.svg" alt="" />
    </v-row>
    <v-row class="hit-info" align="center">
      <v-col>
        <p class="sub-header">kokoro</p>
        <p class="title">Кружка «Дейзи», 250 мл</p>
        <p class="price">1 800 ₽</p>
        <p class="body">
          Набор «Тотемо» выполнен в строгих японских традициях, а так же
          изоготовлен из высококачественной керамики. Тарелки прочны и
          продуманны до последнего нюанса, а так же являются отличным
          приобретением для ресторана, организующего банкеты, фуршеты и
          кейтеринг.
        </p>
        <button class="button">Добавить в корзину</button>
      </v-col>
    </v-row>
  </v-row>
</template>

<style scoped>
.hit-image {
  flex: 1;
}
.hit-info {
  flex: 1;
  padding: 0px 100px;
}
.sub-header {
  font-style: italic;
  font-size: 20px;
}
.title {
  font-size: 23px;
  font-weight: 600;
}
.price {
  margin-top: 20px;
  font-size: 25px;
  font-weight: 200;
}
.body {
  margin-top: 15px;
  font-size: 15px;
}
.button {
  margin-top: 30px;
  background-color: black;
  color: white;
  border: none;
  font-size: 15px;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  cursor: pointer;
}
</style>
