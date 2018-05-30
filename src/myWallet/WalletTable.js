import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class WalletTable extends Component {
    
    constructor(props) {
        super(props);
    }

    unitFormat = (str)=>{
        var formatter = new Intl.NumberFormat('ko-KR'); 
        return formatter.format(str)
    }

    profit = (cell,row) => {
        if(row.amount === 0) return <div></div>

        let profit = row.now_price - row.buy_price;
        let rate = (profit / row.buy_price * 100).toFixed(2);

        return <div style={profit>0 ? {color:'red'} : {color:'blue'}}>{this.unitFormat(profit)} ({rate}%)</div>
    }

    total_price = (cell, row) => {
        if(row.amount === 0) return 0

        let total = Math.round(row.now_price * row.amount)
        return this.unitFormat(total)
    }

    wonFormat = (cell) => {
        return this.unitFormat(cell)
    }

    render() {
        return (
            <div>
                <BootstrapTable data={ this.props.data }>
                    <TableHeaderColumn dataAlign='left' dataField='name' isKey> 코인 </TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataField='amount'>보유량</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataField='buy_price'>구매가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataField='now_price'>현재가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.profit }>수익</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.total_price }>총액</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default WalletTable;