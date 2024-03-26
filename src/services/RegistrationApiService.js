import { api } from '@/utils';

export class RegistrationApiService {
    static signUp (params) {
        return api.post('/users', params);
    }
}