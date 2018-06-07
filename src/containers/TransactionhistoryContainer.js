import React, { Component } from 'react';

import TransactionhistoryForm from '../components/transactionHistory/TransactionhistoryForm';
import TransactionhistoryTable from '../components/transactionHistory/TransactionhistoryTable';

import data from '../components/transactionHistory/dummy.json';

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