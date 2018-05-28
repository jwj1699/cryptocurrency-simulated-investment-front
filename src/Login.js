import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="Login-Container col-md-4">
                    <div className="Login row">
                        <input/><input/><button>로그인</button>
                    </div>
                    <div className="row Login">
                        <div className="col-md-3"><Link to='/signup'> 회원가입 </Link></div>
                        <div className="col-md-4">비밀번호찾기</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;