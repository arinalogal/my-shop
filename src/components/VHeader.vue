<template>
  <header class="v-header">
    <v-container>
      <v-row align="center" no-gutters class="header">
        <v-row class="left" align="center">
          <router-link class="nav-button first" to="/">kitchin</router-link>
          <span class="nav-button">распродажа</span>
          <span class="nav-button">вопросы</span>
          <img src="@/assets/icons/search.svg" alt="" class="search" />
        </v-row>

        <span class="company-name">kitchin</span>

        <v-row justify="end" class="right" align="center">
          <router-link to="/ordering">
            <img src="@/assets/icons/account.svg" alt="" class="nav-icon" />
          </router-link>
          <router-link to="/ordering">
            <img src="@/assets/icons/shop.svg" alt="" class="nav-icon last" />
          </router-link>
        </v-row>

        <!-- <v-col>
                    <v-sidebar-menu/>
                </v-col>

                <v-col>
                    <v-logo/>
                </v-col>

                <v-col>
                    <input type="text" v-model="search">

                    <button @click="onSearch">@</button>
                </v-col>

                <v-col>
                    <router-link
                        v-if="isAuth"
                        to="/profile"
                        class="v-menu__item"
                    >
                        <template v-if="user">
                            {{ user.firstname }}
                        </template>
                    </router-link>

                    <router-link
                        v-else
                        to="/auth/sign-in"
                        class="v-menu__item"
                    >
                        Вход
                    </router-link>
                </v-col> -->
      </v-row>
    </v-container>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuth } from "@/composables";
import VRow from "@/components/UI/VRow.vue";
import VCol from "@/components/UI/VCol.vue";
import VLogo from "@/components/VLogo.vue";
import VSidebarMenu from "@/components/VSidebarMenu.vue";
import VContainer from "@/components/VContainer.vue";

const search = ref();

const router = useRouter();
const { isAuth, user } = useAuth();

function onSearch() {
  router.push({
    path: "/search",
    query: {
      q: search.value,
    },
  });
}
</script>

<style scoped>
.v-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  background-color: #f4f4f4;

  padding: 10px 0;
}

.header {
  display: flex;
  text-align: center;
}

.left {
  flex: 1;
}

.right {
  flex: 1;
}

.nav-button {
  font-family: "Montserrat", sans-serif;
  margin: 0px 20px;
  font-size: 17px;
  font-weight: 300;
  color: black;
  text-decoration: none;
}

.nav-button.first {
  margin-left: 97px;
  font-size: 30px;
  font-weight: 800;
}

.search {
  margin: 0px 20px;
  cursor: pointer;
}

.company-name {
  font-family: "Montserrat", sans-serif;
  font-size: 45px;
  font-weight: 800;
  flex: 0;
  margin: 0 auto;
}

.nav-icon {
  margin: 0px 10px;
  cursor: pointer;
}

.nav-icon.last {
  margin-right: 97px;
}
</style>
