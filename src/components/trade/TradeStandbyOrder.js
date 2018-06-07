import React, { Component } from 'react';
import UxcoreTable from 'uxcore-table';



class TradeStandbyOrder extends Component {
    render() { 

        const columns = [
            { dataKey: 'data', title: '시간', },
            { dataKey: 'type', title: '구분', },
            { dataKey: 'quantity', title: '수량', },
            { dataKey: 'unfixedQuantity ', title: '미체결수량', },
            { dataKey: 'price', title: '가격', },
            { title: '취소', },
        ];

        const rows = {
            "content":[
                {"data":"2018-06-01 21:18:52","type":"매수","quantity":0,"unfixedQuantity":7,"price":421500},
                {"data":"2018-06-01 21:21:09","type":"매수","quantity":4.25,"unfixedQuantity":2.75,"price":421500}
            ]
        }

          
        return (
            <div>
                <UxcoreTable jsxcolumns={columns} />
            </div>
        );
    }
}

export default TradeStandbyOrder;