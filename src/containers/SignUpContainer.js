import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class SignUpContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            userPw: '',
            userName: '',
            userEmail: '',

            redirectForMain: false
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

    signupPost = () =>{
        let params = new URLSearchParams();
            params.append('userId', this.state.userId);
            params.append('userPw', this.state.userPw);
            params.append('userName', this.state.userName);
            params.append('userEmail', this.state.userEmail);

        console.log("signupPost")
        axios.post('http://localhost:8181/signupPost', params)
        .then( response => { 
            alert("가입을 환영합니다.")
            this.setState({
                redirectForMain: true
            })
        })
        .catch( error => { alert("회원가입 실패"+error) } );
    }

    renderRedirect = () => {
        if (this.state.redirectForMain) {
          return <Redirect to='/'/>
        }
    }

    render() {
        return (
            <div className='SignUp-Container'>
                {this.renderRedirect()}
                <label style={{fontSize:25,marginBottom:40}}>회원가입</label>
                <div className='col-md-3' style={{margin:'auto', textAlign:'left'}}>
                    <div className='form-group'>
                        <label> 아이디</label>
                        <input className="form-control" type="text" name="userId" onChange={this.handleChange} placeholder="아이디를 입력하세요"/>
                    </div>
                    <div className='form-group'>
                        <label> 비밀번호</label>
                        <input className="form-control" type="text" name="userPw" onChange={this.handleChange} placeholder="패스워드를 입력하세요"/>
                    </div>
                    <div className='form-group'>
                        <label> 비밀번호확인</label>
                        <input className="form-control" type="text" name="userPw2" onChange={this.handleChange} placeholder="패스워드를 입력하세요"/>
                    </div>
                    <div className='form-group'>
                        <label> 이름</label>
                        <input className="form-control" type="text" name="userName" onChange={this.handleChange} placeholder="이름을 입력하세요"/>
                    </div>
                    <div className='form-group'>
                        <label> 이메일</label>
                        <input className="form-control" type="text" name="userEmail" onChange={this.handleChange} placeholder="이메일을 입력하세요"/>
                    </div>
                    <div style={{textAlign:'center',marginTop:"10%"}}>
                        <button className="col-md-8 btn btn-default" onClick={this.signupPost}>POST</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpContainer;