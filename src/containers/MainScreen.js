import React, { Component } from 'react';
import Login from '../Login';
import CompositeTable from '../components/mainScreen/CompositeTable';

import MainImage from '../img/main_Image.jpg'
import data from '../components/mainScreen/dummy.json';

class MainScreen extends Component {
    render() {
        return (
            <div className="MainScreen">
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