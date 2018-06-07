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
        let fluctuation = row.now_price - row.closing_price;
        let rate = fluctuation / row.closing_price * 100;

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
        if(cell === '비트코인') coinIcon = btcIcon;
        else if(cell === '이더리움') coinIcon = etcIcon;
        else if(cell === '이더리움 클래식') coinIcon = ethIcon;
        else if(cell === '리플') coinIcon = xrpIcon;
        else if(cell === '라이트코인') coinIcon = ltcIcon;

        return `<img src=${coinIcon} alt="BTC"/> ${cell}`;
    }

    render() {
        return (
            <div>
                <BootstrapTable data={ data }>
                    <TableHeaderColumn dataAlign='left'  dataFormat={ this.iconFormat } dataField='coin_name' isKey> </TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.unitFormat } dataField='now_price' >현재가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.unitFormat } dataField='closing_price'>전일가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.rateOfPrice } >변동율</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.unitFormat } dataField='max_price'>고가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.unitFormat } dataField='min_price'>저가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.unitFormat } dataField='volume'>거래량</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default CompositeTable;