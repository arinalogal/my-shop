import { ref } from 'vue';
import { AuthApiService } from '@/services';
import { useRouter } from 'vue-router';

const isAuth = ref(false);
const user = ref(null);

export function useAuth () {
    const router = useRouter();

    async function onLogin (params) {
        const { data } = await AuthApiService.login(params)
            
        if (!data.length) {
            alert('Не верный логин или пароль')

            return;
        }

        localStorage.setItem('user', JSON.stringify(data[0]));

        authInit();

        router.push('/profile');
    }

    async function getUser () {
        const userId = JSON.parse(localStorage.getItem('user'));

        const { data } = await AuthApiService.getUser(userId.id)
            
        user.value = data[0];
    }

    function logout () {
        localStorage.removeItem('user');

        isAuth.value = false;
        user.value = null;

        router.push('/');
    }

    async function authInit () {
        const token = localStorage.getItem('user');

        if (!token) {
            return;
        }

        isAuth.value = true;

        await getUser();
    }

    async function updateUser (id, params) {
        const { data } = await AuthApiService.updateUser(id, params)
        
        user.value = data;
    }

    return {
        isAuth,
        user,
        authInit,
        onLogin,
        logout,
        updateUser
    }
}