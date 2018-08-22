import * as sessionApi from '../api/sessionApi';
import { sessionService } from 'redux-react-session';

export const login = (user) => {
    return () => {
        return sessionApi.login(user).then(response => {
            const { token } = response.data;
            sessionService.saveSession({ token }).then(() => {
                sessionService.saveUser(response.data.data)
            })
        })
    }
}

export const logout = () => {
    return () => {
        sessionService.deleteSession();
        sessionService.deleteUser();
    }
}