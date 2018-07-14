import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

class Header extends Component {

    userInfo = () =>{
        if(!this.props.userId) return
        return <div>
                    <div>{this.props.userId}님</div>
                    <div>{this.props.userCashAmonut}원</div>
                </div>
    }

    render() {
        return (
            <div className="row col-md-12">
                <div className="col-md-3"><Link to="/"><img src={logo} className="App-logo" alt="logo" />[로고]</Link></div>
                <div className="Header col-md-1" ><Link to="/trade/BTC">거래</Link></div>
                <div className="Header col-md-1" ><Link to="/myPage/history">거래기록</Link></div>
                <div className="Header col-md-1" ><Link to="/board/list">자유게시판</Link></div>
                <div className="Header col-md-5" />
                {this.userInfo()}
            </div>
        )
    }
}

export default Header;