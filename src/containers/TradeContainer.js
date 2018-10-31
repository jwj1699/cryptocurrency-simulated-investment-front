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
<<<<<<< HEAD
            CurrencyInfo: {}
=======
            currencyInfo: {},
            orderbook:{}
>>>>>>> 40e4cec7e72545f77a94a7effdd753cc6d380cf0
            
        } 
    }

<<<<<<< HEAD
    getCurrencyInfo = (currency) =>{
        axios.get("http://localhost:8181/CurrencyInfo/"+currency)
        .then(res => {this.setState({ CurrencyInfo:res.data })
=======
    getApi = (currency) =>{
        let data1;
        let data2;
        axios.get("http://localhost:8181/CurrencyInfo/"+currency)
            .then(res => {data1= res.data })
        .then(() => {
            axios.get("https://api.bithumb.com/public/orderbook/"+currency)
                .then(res2 => {data2= res2.data.data})
        })
        .then(() => {
            this.setState({ 
                currencyInfo:data1,
                orderbook:data2  
            })
        })
        console.log(data2)

    }

    getCurrencyInfo = (currency) =>{
        axios.get("http://localhost:8181/CurrencyInfo/"+currency)
        .then(res => {this.setState({ currencyInfo:res.data },console.log(res.data))
            },err => {alert("Server rejected response with: " + err);
        });
    }

    getOrderbook = (currency) =>{
        axios.get("https://api.bithumb.com/public/orderbook/"+currency)
        .then(res => {this.setState({ orderbook:res.data.data })
>>>>>>> 40e4cec7e72545f77a94a7effdd753cc6d380cf0
            },err => {alert("Server rejected response with: " + err);
        });
    }

    componentWillMount(){
<<<<<<< HEAD
        //this.getCurrencyInfo(this.props.to)
    }

    componentWillReceiveProps(nextProps){
        this.getCurrencyInfo(nextProps.to)
=======
        this.getCurrencyInfo(this.props.to);
        this.getOrderbook(this.props.to);
    }

    componentWillReceiveProps(nextProps){
        this.getCurrencyInfo(nextProps.to);
        this.getOrderbook(this.props.to);
>>>>>>> 40e4cec7e72545f77a94a7effdd753cc6d380cf0
    }

    
    render() {
        console.log(this.state.orderbook)
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
<<<<<<< HEAD
                            CurrencyInfo = {this.state.CurrencyInfo}
=======
                            currencyInfo = {this.state.currencyInfo}
                            orderbook = {this.state.orderbook}
>>>>>>> 40e4cec7e72545f77a94a7effdd753cc6d380cf0
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TradeContainer;