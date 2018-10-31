import React, { Component } from 'react';
import TemplateSidebar from './TemplateSidebar';

import Transactionhistory from '../components/transactionHistory';
import MyWallet from '../components/myWallet'
import Trade from '../components/trade'

class TemplateContainer extends Component {
    render() {
        const to = (this.props.match.params.to === undefined) ? "main" : this.props.match.params.to;

        let screen = null;
        if(to === 'history') screen = <Transactionhistory/>
        if(to === 'wallet') screen = <MyWallet/>
        if(to === 'BTC'|| to === 'ETH'|| to === 'ETC'|| to === 'XRP'|| to === 'LTC') screen = <Trade to={to}/>

        return (
            <div className="row" >
                <TemplateSidebar to={to}/>
                <div className="col-md-10">                
                    {screen}
                </div>
            </div>
        );
    }
}

export default TemplateContainer;