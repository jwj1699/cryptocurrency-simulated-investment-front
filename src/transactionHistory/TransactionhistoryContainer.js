import React, { Component } from 'react';

import TransactionhistoryForm from './TransactionhistoryForm';
import TransactionhistoryTable from './TransactionhistoryTable';

import data from './dummy.json';

class TransactionhistoryContainer extends Component {
    render() {
        return (
            <div>
                <TransactionhistoryForm/>
                <TransactionhistoryTable data={data}/>
            </div>
        );
    }
}

export default TransactionhistoryContainer;