import React, { Component } from 'react';

class TradeOrderTab extends Component {
    render() {
        return (
            <div>
                <button className='col-md-6' style={{height:40,color:'white',backgroundColor:'red'}} value='매수' onClick={this.props.handleChangeTab}>매수</button>
                <button className='col-md-6' style={{height:40,color:'white',backgroundColor:'blue'}} value='매도' onClick={this.props.handleChangeTab}>매도</button>
            </div>
        );
    }
}

export default TradeOrderTab;