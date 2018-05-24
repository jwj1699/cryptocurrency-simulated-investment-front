import React, { Component } from 'react';
import Header from '../Header';
import Login from '../Login';
import CompositeTable from './CompositeTable';

import MainImage from '../img/main_Image.jpg'
import data from './dummy.json';

class MainScreen extends Component {
    render() {
        return (
            <div className="MainScreen">
                <header className="MainScreen-header">
                    <Header/>
                </header>
                <div className="MainScreen-Top" style={{ backgroundImage: "url(" +  MainImage  + ")" }}>
                    <Login/>
                </div>
                <div className="MainScreen-Table col-md-11">
                    <CompositeTable/>
                </div>
            </div>
        );
    }
}

export default MainScreen;