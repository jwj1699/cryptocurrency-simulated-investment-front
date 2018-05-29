import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class TransactionhistoryTable extends Component {

    constructor(props) {
        super(props);
    }

    unitFormat = (str)=>{
        var formatter = new Intl.NumberFormat('ko-KR'); 
        return formatter.format(str)
    }
    
    total_price = (cell, row) => {
        return this.unitFormat(row.trade_amount * row.trade_price)
    }
    

    render() {
        return (
            <div className='col-md-11'>
                <BootstrapTable data={ this.props.data } pagination>
                    <TableHeaderColumn dataAlign='center'width='20%' dataField='trade_date' isKey> 시간 </TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center'width='15%' dataField='currency'>코인</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='center'width='10%' dataField='type'>구분</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' width='15%' dataField='trade_amount'>수량</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' width='15%' dataField='trade_price' dataFormat={ this.unitFormat } >가격</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' width='20%' dataFormat={ this.total_price }>거래금액</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default TransactionhistoryTable;