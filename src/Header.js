import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="row col-md-12">
                <div className="col-md-3"><img src={logo} className="App-logo" alt="logo" />[로고]</div>
                <div className="Header col-md-1" >거래</div>
                <div className="Header col-md-1" >거래기록</div>
                <div className="Header col-md-1" >자유게시판</div>
            </div>
        );
    }
}

export default Header;