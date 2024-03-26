<script setup>
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
</script>

<template>
  <div class="container">
    <v-col class="banner-text">
      <v-row class="banner-info">
        <p class="name">Коллекция «Джундо»</p>
      </v-row>
      <v-row justify="beetwen">
        <span class="info">Свежий взгляд на обыденные вещи</span>
        <span class="banner-button">Просмотреть коллекции</span>
      </v-row>
    </v-col>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  background-image: url("@/assets/images/banner_djundo.svg");
  background-size: cover;
  height: 737px;
}
.name {
  font-size: 45px;
  font-weight: 500;
  color: white;
  margin-top: 84px;
  margin-bottom: 5px;
}
.info {
  font-size: 25px;
  font-weight: 200;
  color: white;
}
.banner-text {
  margin: 0px 84px;
}
.banner-button {
  font-size: 15px;
  font-weight: 300;
  padding: 10px;
  border: 1px solid white;
  color: white;
  cursor: pointer;
}
</style>
