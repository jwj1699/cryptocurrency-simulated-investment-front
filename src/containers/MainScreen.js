import React, { Component } from 'react';
import { connect } from 'react-redux'
import Login from '../Login';
import axios from 'axios';
import CompositeTable from '../components/mainScreen/CompositeTable';

import MainImage from '../img/main_Image.jpg'
import data from '../components/mainScreen/dummy.json';

class MainScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData:''
        };
    }

    getData = () =>{
        axios.get("http://localhost:8181/tableData")
        .then(res => {this.setState({ tableData:res.data })
            },err => {alert("Server rejected response with: " + err);
        });
    }

    loginView = () => {
        if(!this.props.authenticated)
            return <Login onLogin = {this.props.onLogin}/>
    }

    componentWillMount(){
        this.getData()
    }

    render() {
        return (
            <div className="MainScreen">
                <div className="MainScreen-Top" style={{ backgroundImage: "url(" +  MainImage  + ")" }}>
                    {this.loginView()}
                </div>
                <div className="MainScreen-Table col-md-11">
                    <CompositeTable data={this.state.tableData}/>
                </div>
            </div>
        );
    }
}

const mapState = (state) => ({
    user: state.session.user,
    authenticated: state.session.authenticated
  });

export default connect(mapState)(MainScreen);