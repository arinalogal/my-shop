import { createApp } from 'vue';
import { router } from '@/router';
import { useAuth } from '@/composables';
import App from '@/App.vue';

import '@/assets/main.css';

const { authInit } = useAuth();

const app = createApp(App);

authInit();

app.use(router);

app.mount('#app');
