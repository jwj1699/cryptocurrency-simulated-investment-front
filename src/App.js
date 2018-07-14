import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import './App.css'
import '../node_modules/uxcore/assets/iconfont.css';
import '../node_modules/uxcore/assets/orange.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

import MainScreen from './components/mainScreen';
import Header from './Header'
import SignUp from './components/signup'
import Template from './template';
import Board from './components/board'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            userCashAmonut: ''
        };
    }

    onLogin = (LoginId,LoginCash) => {
		this.setState({
            userId: LoginId,
            userCashAmonut: LoginCash
        });
    }

    onLogout = () => {
		this.setState({
			userId:''
        });
    }

    testtt = (param) =>{
        console.log(param)
    }

    render() {
        return (
            <div>
                <Router >
                    <div className="layout ">
                        <header className="MainScreen-header">
                            <Header 
                                userId = {this.state.userId}
                                userCashAmonut = {this.state.userCashAmonut}
                                onLogout = {this.onLogout}
                            />
                        </header>
                        <Switch>
                            <Route exact path="/" render={props => <MainScreen onLogin = {this.onLogin} userId = {this.state.userId}/>}/>
                            <Route path="/signup" component={SignUp}/>
                            <Route path="/board/:to?" component={Board}/>
                            <Route path="/myPage/:to?" component={Template}/>
                            <Route path="/trade/:to?" component={Template}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
