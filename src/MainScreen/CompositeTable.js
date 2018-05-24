import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import data from './dummy.json';

class CompositeTable extends Component {

    rateOfPrice = (cell, row) => {
        let a = row.now_price - row.closing_price;
        let b = a / row.closing_price * 100;

        return( a + "(" + b.toFixed(2) + "%)")
    }

    render() {
        return (
            <div>
                <BootstrapTable data={ data }>
                    <TableHeaderColumn dataAlign='center' dataField='coin_name' isKey> </TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataField='now_price'>현재가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataField='closing_price'>전일가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataFormat={ this.rateOfPrice } >변동율</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataField='max_price'>고가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataField='min_price'>저가</TableHeaderColumn>
                    <TableHeaderColumn dataAlign='right' dataField='volume'>거래량</TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default CompositeTable;