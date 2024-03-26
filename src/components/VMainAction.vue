<script setup>
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
</script>

<template>
  <div class="container">
    <v-row align="center" justify="center">
      <span class="action-button">тарелки</span>
      <span class="action-button">приборы</span>
      <span class="action-button">миски</span>
      <router-link to="/catalog" class="action-button">
        <span>стаканы/кружки/бокалы</span>
      </router-link>
    </v-row>
    <v-row class="action-body" align="center">
      <v-row class="action-image" justify="end">
        <img src="@/assets/images/tarelka.svg" alt="" class="image" />
      </v-row>
      <v-row class="action-info">
        <v-col class="info-text">
          <p class="header">
            kitchin — магазин японской посуды, основывающийся на поддержании
            строгих японских традиций, лаконичности и минимализма.
          </p>
          <p class="body">
            Посмотрите раздел наших хитов, чтобы найти то, что точно придется
            Вам по вкусу.
          </p>
          <router-link class="hits-button" to="/hits">
            Просмотреть хиты продаж
          </router-link>
        </v-col>
      </v-row>
    </v-row>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  margin-top: 40px;
}

.action-button {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  font-weight: 300;
  margin: 0 20px;
  cursor: pointer;
  color: black;
  text-decoration: none;
}

.action-body {
  margin-top: 30px;
}

.action-image {
  flex: 2;
}

.image {
  margin-right: 150px;
}

.action-info {
  flex: 2;
  margin-right: 200px;
}
.header {
  line-height: 29px;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.5;
  margin-bottom: 20px;
}
.body {
  font-size: 20px;
  line-height: 29px;
  font-weight: 200;
  opacity: 0.5;
  margin-bottom: 30px;
}
.hits-button {
  font-size: 15px;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  padding: 10px;
  border: 0.5px solid black;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: black;
}
</style>
