import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import './App.css'
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

import MainScreen from './mainScreen/MainScreen';
import Header from './Header'
import SignUp from './signup/index'

class App extends Component {
    render() {
        return (
            <div>
                <header className="MainScreen-header">
                    <Header/>
                </header>
                <Router >
                    <div className="layout ">
                        <Switch>
                            <Route exact path="/" component={MainScreen} />
                            <Route path="/signup" component={SignUp}/>
                            {/* <Route path="/dashboard/:job?/:view?/:id?" component={Dashboard} />*/}
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
