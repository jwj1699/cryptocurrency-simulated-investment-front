import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import { sessionService } from 'redux-react-session';

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
    render() {
        return (
            <div>
                <Router onEnter={sessionService.checkAuth}>
                    <div className="layout ">
                        <header className="MainScreen-header">
                            <Header/>
                        </header>
                        <Switch>
                            <Route exact path="/" component={MainScreen}/>
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
