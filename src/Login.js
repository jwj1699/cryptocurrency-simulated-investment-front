import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return (
            <div>
                <form className="Login-Container col-md-4">
                    <div className="Login row">
                        <input className='col-md-4' name='userId'/><input className='col-md-4' name='userPawd' style={{marginLeft:20,marginRight:50}}/><button className='col-md-2 btn'>로그인</button>
                    </div>
                    <div className="Login row">
                        <div className="col-md-3"><Link to='/signup'> 회원가입 </Link></div>
                        <div className="col-md-4">비밀번호찾기</div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;