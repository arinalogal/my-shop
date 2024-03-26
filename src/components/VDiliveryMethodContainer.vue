<script setup>
import VRow from "./UI/VRow.vue";
</script>

<template>
  <v-row class="v-diliviry-method-container" justify="beetwen">
    <div class="method">
      <p class="info">Курьером</p>
      <p class="info b">Курьерская доставка</p>
      <p class="info">Бесплатно</p>
    </div>
    <div class="method">
      <p class="info">Почтой</p>
      <p class="info b">Почтовая доставка</p>
      <p class="info">Бесплатно</p>
    </div>
  </v-row>
</template>

<style scoped>
.v-diliviry-method-container {
  padding: 119px 44px;
  width: 570px;
  margin-top: 60px;
  margin-left: 80px;
  background-color: #f4f4f4;
}
.method {
  width: 200px;
  height: 113px;
  border: 1px solid black;
  vertical-align: middle;
  padding-right: 30px;
  font-family: "Cormorant", serif;
}
.info {
  font-family: "Cormorant", serif;
  font-size: 20px;
  margin: 10px 0px 10px 20px;
  font-weight: 700;
}
.info.b {
  font-size: 15px;
  font-weight: 400;
}
</style>
