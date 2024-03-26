<script setup>
import VRow from "./UI/VRow.vue";
import VCol from "./UI/VCol.vue";
</script>

<template>
  <div class="v-dilivery-addres-container">
    <v-row>
      <div class="input-container">
        <input type="text" placeholder="Населённый пункт" />
      </div>
      <div class="input-container">
        <input type="text" placeholder="Имя получателя" />
      </div>
    </v-row>
    <v-row>
      <div class="input-container">
        <input type="text" placeholder="Адрес доставки" />
      </div>
      <div class="input-container">
        <input type="text" placeholder="Номер телефона получателя" />
      </div>
    </v-row>
    <v-row justify="beetween" class="aaskdmaskdms">
      <div class="input-container big">
        <input type="text" placeholder="Комментарий курьеру" />
      </div>
      <button class="save-data-button">Сохранить данные</button>
    </v-row>
  </div>
</template>

<style scoped>
.v-dilivery-addres-container {
  background-color: #f4f4f4;
  width: 675px;
  padding: 60px 60px 43px 40px;
  margin-top: 60px;
}
.input-container {
  padding: 15px 60px 15px 10px;
  border: 1px solid black;
  flex: 1;
  margin-left: 30px;
  margin-bottom: 30px;
}
.button-row {
  margin-left: 65px;
}
.input-container.big {
  padding-bottom: 47px;
  width: 267px;
  flex: 0;
  margin-bottom: 0;
}
.save-data-button {
  margin-left: 80px;
  width: 169px;
  height: 42px;
  background-color: black;
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
  font-size: 15px;
  color: white;
  border: none;
}
.aaskdmaskdms {
  align-items: end;
}
</style>
