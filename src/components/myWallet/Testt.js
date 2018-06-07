import React, { Component } from 'react';
import Article from './Article'

import './testt.css'

class Testt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                'BTC': {
                    "currency": "비트코인",
                    "amount": 3.1639,
                    "price": 1182384,
                    "rate": 4.82
                },
                'ETH': {
                    "currency": "이더리움",
                    "amount": 12.0172,
                    "price": -382384,
                    "rate": -3.82
                },
                'ETC': {
                    "currency": "이더리움 클래식",
                    "amount": 0,
                },
                'XRP': {
                    "currency": "리플",
                    "amount": 0,
                },
                'LTC': {
                    "currency": "라이트코인",
                    "amount": 0,
                },
            },
        }
    }

    renderArticle = (key) => {
        return (
            <div className='col'>
                <Article key={key} index={key} data={this.state.data[key]} />
            </div>
        )
    }

    render() {
        return (
            <div className="form-inline">
                {Object.keys(this.state.data).map(this.renderArticle)}
            </div>
            );
        }
    }

export default Testt;