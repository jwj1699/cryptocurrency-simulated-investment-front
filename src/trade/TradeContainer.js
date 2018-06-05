import React, { Component } from 'react';

import TradeChart from './TradeChart'
import TradeOrder from './tradeOrder'
import TradePriceInfo from './TradePriceInfo'
import TradeStandbyOrder from './TradeStandbyOrder'

class TradeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currency:'BTC',
            step:'500',
            closing_price: 786000,
            now_price: 797500,
            max_price : 770000,
            min_price : 694500,
            volume : 73810
        };
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
                            closing_price={this.state.closing_price}
                            now_price={this.state.now_price}
                            max_price={this.state.max_price}
                            min_price={this.state.min_price}
                            volume={this.state.volume}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TradeContainer;