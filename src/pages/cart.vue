<script setup>
import { useCart } from "@/composables";
import VLayoutDefault from "@/components/Layouts/VLayoutDefault.vue";
import VContainer from "@/components/VContainer.vue";
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VDiliveryMethodContainer from "@/components/VDiliveryMethodContainer.vue";
import VDiliveryAddresContainer from "@/components/VDiliveryAddresContainer.vue";
</script>

<template>
  <v-layout-default>
    <v-container class="container">
      <v-row class="dilivery-bloc">
        <div class="dilivery-container">
          <span class="header">Способ доставки</span>
          <v-dilivery-method-container />
        </div>
        <div class="dilivery-container">
          <span class="header-right">Адрес доставки</span>
          <v-dilivery-addres-container />
        </div>
      </v-row>
      <v-row class="dilivery-bloc">
        <div class="dilivery-container">
          <span class="header">Дата и время доставки</span>
          <v-row class="date-info">
            <div class="date-info-container">
              <p class="date-name">Пт</p>
              <p class="date-date">15.03</p>
            </div>
            <div class="date-info-container">
              <p class="date-name">Ср</p>
              <p class="date-date">21.03</p>
            </div>
            <div class="date-info-container">
              <p class="date-name">Пт</p>
              <p class="date-date">16.03</p>
            </div>
            <div class="date-info-container">
              <p class="date-name">Пт</p>
              <p class="date-date">17.03</p>
            </div>
          </v-row>
          <v-row class="date-info">
            <span class="date-time">9:00-12:00</span>
            <span class="date-time">13:00-18:00</span>
            <span class="date-time">19:00-22:00</span>
          </v-row>
        </div>
        <div class="dilivery-container">
          <span class="header-right">Оплата</span>
          <v-row class="payment-info">
            <v-col>
              <v-row class="payment-row" justify="beetwen" align="center">
                <span class="payment-type">СБП</span>
                <input type="checkbox" name="" id="rounder-checkbox" style="display: none;"/>
                <label for="rounder-checkbox" class="round-checkbox"</label>
              </v-row>
              <v-row justify="beetwen" align="center">
                <span class="payment-type">Банковская карта</span>
                <input type="checkbox" name="" id="rounder-checkbox" style="display: none;"/>
                <label for="rounder-checkbox" class="round-checkbox"</label>
              </v-row>
              <v-row align="center" justify="beetwen">
                <span class="payment-type">SberPay</span>
                <input type="checkbox" name="" id="rounder-checkbox" style="display: none;"/>
                <label for="rounder-checkbox" class="round-checkbox"</label>
              </v-row>
            </v-col>
            <button class="payment-button">Оплатить картой</button>
          </v-row>
        </div>
      </v-row>
    </v-container>
  </v-layout-default>
</template>

<style scoped>
.container {
  background-color: white;
  padding-bottom: 182px;
}
.dilivery-container {
  flex: 1;
}
.dilivery-bloc {
  padding-top: 60px;
}
.header {
  font-size: 45px;
  font-weight: 500;
  margin-left: 80px;
}
.header-right {
  margin-right: 0;
  font-size: 45px;
  font-weight: 500;
}
.date-info {
  margin-left: 80px;
  margin-top: 39px;
}
.date-info-container {
  border: 0.5px solid black;
  padding: 5px 60px 5px 10px;
  margin-right: 20px;
}
.date-name {
  font-family: "Cormorant", serif;
  font-size: 25px;
  font-weight: 700;
}
.date-date {
  font-family: "Fahkwang", sans-serif;
  font-size: 15px;
  font-weight: 200;
}
.date-time {
  padding: 3px 20px 3px 5px;
  background-color: #f4f4f4;
  font-family: "Fahkwang", sans-serif;
  font-weight: 200;
  font-size: 15px;
  margin-right: 25px;
}
.payment-info {
  margin-top: 39px;
  align-items: end;
}
.payment-type {
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 15px;
}
.payment-row {
  width: 250px;
}
.round-checkbox {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 1px solid black;
}
.payment-button {
    width: 155px;
    height: 41px;
    background-color: black;
    color: white;
    font-family: "Montserrat", sans-serif;
    border: none;
    font-weight: 300;
    font-size: 15px;
    margin-left: 110px;
}
</style>
