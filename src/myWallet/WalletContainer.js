import React, { Component } from 'react';
import WalletChart from './WalletChart';
import WalletCard from './WalletCard';
import WalletTable from './WalletTable';

import data from './dummy.json';

class WalletContainer extends Component {

    constructor(props) {
        super(props);

        this.setState({
            xAxis: '',
            seriesProfit: '',
            seriesLoss: '',
            cumulate: ''
        })
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
        this.setCumulate()
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