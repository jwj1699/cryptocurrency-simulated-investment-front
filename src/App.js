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

import MainScreen from './mainScreen/MainScreen';
import Header from './Header'
import SignUp from './signup'
import Template from './template';

class App extends Component {
    render() {
        return (
            <div>
                
                <Router >
                    <div className="layout ">
                        <header className="MainScreen-header">
                            <Header/>
                        </header>
                        <Switch>
                            <Route exact path="/" component={MainScreen} />
                            <Route path="/signup" component={SignUp}/>
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
