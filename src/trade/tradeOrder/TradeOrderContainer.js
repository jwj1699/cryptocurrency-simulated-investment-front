import React, { Component } from 'react';

import TradeOrderTab from './TradeOrderTab'
import TradeOrder from './TradeOrder'

class TradeOrderContainer extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            tradeType:'매수',
        };
    }

    handleChangeTab = (e) =>{
        this.setState({
            tradeType : e.target.value
        })
    }

    render() {
        return (
            <div>
                <TradeOrderTab handleChangeTab={this.handleChangeTab}/>
                <TradeOrder unit={this.props.currency} step={this.props.step} tradeType={this.state.tradeType}/>
            </div>
        );
    }
}

export default TradeOrderContainer;