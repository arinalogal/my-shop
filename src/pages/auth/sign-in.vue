<template>
  <v-layout-default>
    <v-container>
        <div>
            <div>Логин</div>
            <input type="text" v-model="model.login">
        </div>

        <div>
            <div>Пароль</div>
            <input type="password" v-model="model.password">
        </div>

        <button @click="onLogin(model)">Войти</button>

        <br><br>

        <router-link to="/auth/sign-up">
            Ещё не зарегистрированы?
        </router-link>
    </v-container>  
  </v-layout-default>
</template>

<script setup>
    import { ref } from 'vue';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VContainer from '@/components/VContainer.vue';
    import { useAuth } from '@/composables';
 
    const model = ref({
        login: 'Test2',
        password: '12345'
    });

    const { onLogin } = useAuth();
</script>