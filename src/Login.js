import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sessionActions from './actions/sessionAction';
import axios from 'axios';

//임시
//import session from './api/sessionApi'

class Login extends Component {

    constructor(props,context) {
        super(props,context);
        this.state = {
            userId: '',
            userPw: '', 
        };
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit = () => {
        const user = {
            userId: this.state.userId,
            userPw: this.state.userPw
        }
        const { login } = this.props.actions;
        login(user)
    }


    loginPost = () =>{
        let params = new URLSearchParams();
            params.append('userId', this.state.userId);
            params.append('userPw', this.state.userPw);

        axios.post('http://localhost:8181/loginPost', params)
        .then( response => { console.log(response.data), this.props.onLogin(response.data.userId, response.data.userCashAmonut) } )
        .catch( error => { alert("로그인 실패"+error) } );
    }

    render() {
        return (
            <div>
                <div className="Login-Container col-md-4">
                    <div className="Login row">
                        <input className='col-md-4' name='userId' onChange={this.handleChange}/><input className='col-md-4' name='userPw' style={{marginLeft:20,marginRight:50}} onChange={this.handleChange}/><button className='col-md-2 btn' onClick={this.onSubmit}>로그인</button>
                    </div>
                    <div className="Login row">
                        <div className="col-md-3"><Link to='/signup'> 회원가입 </Link></div>
                        <div className="col-md-4">비밀번호찾기</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return {
      actions: bindActionCreators(sessionActions, dispatch)
    };
};

export default connect(null, mapDispatch)(Login);;