import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import btcIcon from '../../img/btc_32.png'
import etcIcon from '../../img/etc_32.png'
import ethIcon from '../../img/eth_32.png'
import xrpIcon from '../../img/xrp_32.png'
import ltcIcon from '../../img/ltc_32.png'
import data from './dummy.json';

class CompositeTable extends Component {

    rateOfPrice = (cell, row) => {
        let fluctuation = row.nowPrice - row.closingPrice;
        let rate = fluctuation / row.closingPrice * 100;

        return fluctuation > 0 
                    ? <div style={{color:"red"}}>{( this.unitFormat(fluctuation) + " (" + rate.toFixed(2) + "%)")}</div>
                    : <div style={{color:"blue"}}>{( this.unitFormat(fluctuation) + " (" + rate.toFixed(2) + "%)")}</div>
        
    }

    unitFormat = (str)=>{
        var formatter = new Intl.NumberFormat('ko-KR');
        return formatter.format(str)
    }

    iconFormat = (cell) => {
        let coinIcon;
        let coinName;
        if(cell === 'BTC') {coinIcon = btcIcon, coinName = '비트코인'}
        else if(cell === 'ETH') {coinIcon = etcIcon, coinName = '이더리움'}
        else if(cell === 'ETC') {coinIcon = ethIcon, coinName = '이더리움 클래식'}
        else if(cell === 'XRP') {coinIcon = xrpIcon, coinName = '리플'}
        else if(cell === 'LTC') {coinIcon = ltcIcon, coinName = '라이트코인'}

        return `<img src=${coinIcon} alt="BTC"/> ${coinName}`;
    }

    render() {
        return (
            <div>
                {console.log(this.props.data)}
                <BootstrapTable data={ this.props.data }>
                    <TableHeaderColumn dataAlign='left'  dataFormat={ this.iconFormat } dataField='currency' isKey> </TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.unitFormat } dataField='nowPrice' >현재가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.unitFormat } dataField='closingPrice'>전일가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.rateOfPrice } >변동율</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.unitFormat } dataField='maxPrice'>고가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.unitFormat } dataField='minPrice'>저가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.unitFormat } dataField='volume'>거래량</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default CompositeTable;