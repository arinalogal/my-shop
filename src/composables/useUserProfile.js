import { ref, watch } from 'vue';
import { useAuth } from '@/composables';

export function useUserProfile () {
    const { user } = useAuth();

    const model = ref({
        login: '',
        lastname: '',
        firstname: '',
        birthday: '',
        email: '',
        phone: ''
    });

    watch(user, value => {
        if (!value) {
            return;
        }

        model.value.login = value.login;
        model.value.lastname = value.lastname;
        model.value.firstname = value.firstname;
        model.value.birthday = value.birthday;
        model.value.email = value.email;
        model.value.phone = value.phone;
    }, {
        immediate: true
    });

    return {
        model
    };
}