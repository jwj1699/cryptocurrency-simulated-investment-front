import React, { Component } from 'react';
import axios from 'axios';

class SignUpContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            userPw: '',
            userName: '',
            userEmail: '',
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
        .then( response => { alert(response) } )
        .catch( error => { alert(error) } );
    }

    signupGet = () =>{
        console.log("GET")
        axios.get('http://localhost:8181/signupGet', {
            params: {
                userId: this.state.userId,
                userPw: this.state.userPw,
                userName: this.state.userName,
                userEmail: this.state.userEmail
            }
        })
        .then( response => { alert(response) } )
        .catch( error => { alert(error) } );
    }

    render() {
        return (
            <div className='SignUp-Container'>
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
                        <input type="submit" className="col-md-8 btn btn-default" value="가입하기"/>
                        <button className="col-md-8 btn btn-default" onClick={this.signupPost}>POST</button>
                        <button className="col-md-8 btn btn-default" onClick={this.signupGet}>GET</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpContainer;