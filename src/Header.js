import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import * as sessionActions from './actions/sessionAction';
import logo from './logo.svg';

class Header extends Component {


    Logout = () =>{
        const { logout } = this.props.actions;
        logout()
    }

    userInfo = () =>{
        if(this.props.authenticated)
            return <div>
                        <div>{this.props.user.userId}님</div>
                        <div>{this.props.user.userCashAmonut}원</div>
                        <button onClick={this.Logout}>로그아웃</button>
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

const mapDispatch = (dispatch) => {
    return {
      actions: bindActionCreators(sessionActions, dispatch)
    };
};

const mapState = (state) => ({
    user: state.session.user,
    authenticated: state.session.authenticated
  });

export default connect(mapState, mapDispatch)(Header);