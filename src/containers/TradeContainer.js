import React, { Component } from 'react';
import axios from 'axios';

import TradeChart from '../components/trade/TradeChart'
import TradeOrder from '../components/trade/tradeOrder'
import TradePriceInfo from '../components/trade/TradePriceInfo'
import TradeStandbyOrder from '../components/trade/TradeStandbyOrder'

class TradeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step:'500',
            CurrencyInfo: {}
            
        } 
    }

    getCurrencyInfo = (currency) =>{
        axios.get("http://localhost:8181/CurrencyInfo/"+currency)
        .then(res => {this.setState({ CurrencyInfo:res.data })
            },err => {alert("Server rejected response with: " + err);
        });
    }

    componentWillMount(){
        //this.getCurrencyInfo(this.props.to)
    }

    componentWillReceiveProps(nextProps){
        this.getCurrencyInfo(nextProps.to)
    }

    
    render() {
        return (
            <div>
                <div>
                    <TradeChart/>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <div>
                            <TradeOrder
                                currency={this.state.currency}
                                step={this.state.step}   
                            />
                        </div>
                        <div style={{marginTop:30}}>
                            <TradeStandbyOrder/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <TradePriceInfo
                            CurrencyInfo = {this.state.CurrencyInfo}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TradeContainer;