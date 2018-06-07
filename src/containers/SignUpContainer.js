import React, { Component } from 'react';

class SignUpContainer extends Component {
    render() {
        return (
            <div className='SignUp-Container'>
                <label style={{fontSize:25,marginBottom:40}}>회원가입</label>
                <form className='col-md-3' style={{margin:'auto', textAlign:'left'}}>
                    <div className='form-group'>
                        <label> 아이디</label>
                        <input className="form-control" type="text" name="id" placeholder="아이디를 입력하세요"/>
                    </div>
                    <div className='form-group'>
                        <label> 비밀번호</label>
                        <input className="form-control" type="text" name="pwd" placeholder="패스워드를 입력하세요"/>
                    </div>
                    <div className='form-group'>
                        <label> 비밀번호확인</label>
                        <input className="form-control" type="text" name="pwd2" placeholder="패스워드를 입력하세요"/>
                    </div>
                    <div className='form-group'>
                        <label> 이름</label>
                        <input className="form-control" type="text" name="name" placeholder="이름을 입력하세요"/>
                    </div>
                    <div className='form-group'>
                        <label> 이메일</label>
                        <input className="form-control" type="text" name="email" placeholder="이메일을 입력하세요"/>
                    </div>
                    <div style={{textAlign:'center',marginTop:"10%"}}>
                        <button type="submit" className="col-md-8 btn btn-default">가입하기</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpContainer;