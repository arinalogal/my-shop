<script setup>
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
</script>

<template>
  <v-row class="header">
    <v-row align="center" justify="beetwen" class="left">
      <v-row align="center">
        <span class="company-name-small">kitchin</span>
        <span class="nav-button">распродажа</span>
        <span class="nav-button">доставка</span>
        <img src="@/assets/icons/search.svg" alt="" class="nav-button" />
      </v-row>
      <span class="company-name">kitchin</span>
    </v-row>
    <v-row class="left info" justify="end" align="center">
      <RouterLink to="/ordering">
        <img src="@/assets/icons/account.svg" alt="" class="nav-icon" />
      </RouterLink>
      <RouterLink to="/ordering">
        <img src="@/assets/icons/shop.svg" alt="" class="nav-icon" />
      </RouterLink>
    </v-row>
  </v-row>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding-top: 10px;
}

.company-name-small {
  font-size: 30px;
  color: black;
  font-weight: 800;
  margin-left: 80px;
  margin-right: 25px;
}

.nav-button {
  margin: 0px 25px;
  font-size: 15px;
  font-weight: 300;
}

.nav-icon {
  margin: 0px 10px;
}

.company-name {
  font-size: 45px;
  font-weight: 800;
  margin-right: 70px;
}

.left {
  flex: 3;
  background-color: white;
}

.left.info {
  padding-right: 50px;
  flex: 2;
  background-color: #f4f4f4;
}
</style>
