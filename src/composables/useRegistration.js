import { RegistrationApiService } from '@/services';
import { useAuth } from '@/composables';

export function useRegistration () {
    const { onLogin } = useAuth();

    async function signUp (params) {
        await RegistrationApiService.signUp(params)
        
        await onLogin({
            login: params.login,
            password: params.password
        });
    }

    return {
        signUp
    }
}