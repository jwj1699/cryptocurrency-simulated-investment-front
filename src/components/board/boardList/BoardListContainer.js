import React, { Component } from 'react';
import BoardList from './BoardList';
import { Link,Redirect } from 'react-router-dom';

import data from './dummy.json'

class BoardListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            writeBtnToggle : false,
        };
    }

    handleToggle = () =>{
        console.log("handleToggle")
        this.setState({
            writeBtnToggle : true
        })
    }

    render() {
        return (
            <div>
                { this.state.writeBtnToggle ? <Redirect to='write'/> :''}
                <div style={{margin:40,marginBottom:10}}>
                    <h3>자유게시판</h3>
                </div>
                <BoardList data={data}/>
                <button className="col-md-1 btn btn-sm" style={{marginTop:-50}} onClick={this.handleToggle}>글쓰기</button>
            </div>
        );
    }
}

export default BoardListContainer;