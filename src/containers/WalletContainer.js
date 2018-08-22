import React, { Component } from 'react';
import axios from 'axios';

import WalletChart from '../components/myWallet/WalletChart';
import WalletCard from '../components/myWallet/WalletCard';
import WalletTable from '../components/myWallet/WalletTable';

import data from '../components/myWallet/dummy.json';

class WalletContainer extends Component {

    constructor(props) {
        super(props);

        this.setState({
            xAxis: '',
            seriesProfit: '',
            seriesLoss: '',
            cumulate: '',

            wallet: '',
        })
    }

    getWallet = (userId) => {
        let params = new URLSearchParams();
            params.append('userId', userId);
        
        axios.post('http://localhost:8181/wallet', params)
        .then( response => { console.log(response.data)} )
        .catch( error => { alert("실패"+error) } );
    }

    setxAxis = () => {
        this.setState({
            xAxis : data.profit.map((contact) =>{
                return contact.mon
            })
        })
    }

    setSeriesProfit = () => {
        this.setState({
            seriesProfit : data.profit.map((contact) =>{
                return contact.profitAndLoss > 0 ? contact.profitAndLoss : '-'
            })
        })
    }

    setSeriesLoss = () => {
        this.setState({
            seriesLoss : data.profit.map((contact) =>{
                return contact.profitAndLoss > 0 ? '-' : contact.profitAndLoss 
            })
        })
    }

    setCumulate = () => {
        this.setState({
            cumulate : data.profit.map((contact) =>{
                return contact.cumulate
            })
        })
    }

    componentWillMount(){
        this.setxAxis(),
        this.setSeriesProfit(),
        this.setSeriesLoss(),
        this.setCumulate(),
        this.getWallet('test')
    }


    render() {
        return (
            <div>
                <WalletCard data={data.wallet}/>
                <WalletChart 
                    xAxis={this.state.xAxis}
                    seriesProfit={this.state.seriesProfit}
                    seriesLoss={this.state.seriesLoss}
                    cumulate={this.state.cumulate}/>
                <WalletTable data={data.wallet}/>
            </div>
        );
    }
}

export default WalletContainer;