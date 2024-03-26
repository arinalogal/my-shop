<script setup>
import VContainer from "@/components/VContainer.vue";
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
</script>

<template>
  <footer class="v-footer">
    <v-container>
      <v-row class="container" justify="beetwen" align="start">
        <v-row>
          <v-col class="info-bloc">
            <p class="header">контакты</p>
            <p class="info">+7 (838) 827 82-18</p>
            <p class="info">nihonnokitchin.com</p>
          </v-col>
          <v-col class="info-bloc">
            <p class="header">о нас</p>
            <p class="info">о компании</p>
            <p class="info">блог</p>
            <p class="info">новости</p>
            <p class="info">условия продажи</p>
          </v-col>
          <v-col class="info-bloc">
            <p class="header">покупателям</p>
            <p class="info">оплата</p>
            <p class="info">доставка</p>
            <p class="info">условия возврата</p>
          </v-col>
        </v-row>
        <v-row>
          <img src="@/assets/icons/telegram.svg" alt="" class="info-icon" />
          <img src="@/assets/icons/whatsapp.svg" alt="" class="info-icon" />
        </v-row>
      </v-row>
      <v-row align="center" justify="center">
        <p class="company-name">kitchin</p>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped>
.v-footer {
  padding: 10px 0;
  margin-top: 80px;
}
.container {
  margin: 0 80px;
}
.header {
  font-size: 15px;
  font-weight: 400;
}
.info-bloc {
  margin: 0px 50px;
}
.info {
  font-size: 15px;
  font-weight: 300;
}
.info-icon {
  margin: 0 5px;
}
.company-name {
  margin-top: 150px;
  font-size: 45px;
  font-weight: 800;
}
</style>
