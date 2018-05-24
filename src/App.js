import React, { Component } from 'react';
import './App.css';

import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

import MainScreen from './MainScreen/MainScreen';

class App extends Component {
    render() {
        return (
            <div>
                <MainScreen/>
            </div>
        );
    }
}

export default App;
