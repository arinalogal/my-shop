<template>
     <v-layout-default>
          <v-container>
               <label>
                    <div>Логин</div>

                    <input type="text" v-model="model.login">
               </label>

               <label>
                    <div>Имя</div>

                    <input type="text" v-model="model.firstname">
               </label>

               <label>
                    <div>Фамилия</div>

                    <input type="text" v-model="model.lastname">
               </label>

               <label>
                    <div>Email</div>

                    <input type="email" v-model="model.email">
               </label>

               <label>
                    <div>Дата рождения</div>

                    <input type="date" v-model="model.birthday">
               </label>

               <label>
                    <div>Телефон</div>

                    <input type="tel" v-model="model.phone">
               </label>

               <label>
                    <div>Пароль</div>

                    <input type="password" v-model="model.password">
               </label>

               <label>
                    <div>Подтверждение пароля</div>

                    <input type="password" v-model="model.confirmPassword">
               </label>

               <br>

               <button @click="onSubmit">Зарегистрироваться</button>


               <br><br>

               <router-link to="/auth/sign-in">
                    Уже зарегистрированы?
               </router-link>
          </v-container>  
     </v-layout-default>
</template>

<script setup>
    import { ref } from 'vue';
    import VLayoutDefault from '@/components/Layouts/VLayoutDefault.vue';
    import VContainer from '@/components/VContainer.vue';
    import { useRegistration } from '@/composables';

    const { signUp } = useRegistration();

    const model = ref({
        login: 'Test',
        lastname: 'Петров',
        firstname: 'Петя',
        birthday: '2024-02-15',
        email: 'test@mail.ru',
        phone: '+79528889797',
        password: '12345',
        confirmPassword: '12345'
    });

    function onSubmit () {
     if (model.value.password !== model.value.confirmPassword) {
          alert('Пароли не совпадают')

          return;
     }

     signUp(model.value);
    }
</script>