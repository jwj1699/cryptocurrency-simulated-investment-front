import axios from 'axios';
import { sessionService } from 'redux-react-session';

export const login = (user) => {

    let params = new URLSearchParams();
        params.append('userId', user.userId);
        params.append('userPw', user.userPw);

    return axios.post('http://localhost:8181/loginPost', params)
        .then( response => {
            return response
        })
        .catch( error => { alert("로그인 실패"+error) } );
}

export const logout = () => {
    alert("로그아웃")
  };