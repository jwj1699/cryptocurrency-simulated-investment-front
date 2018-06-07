import React, { Component } from 'react';
import Article from './Article'

import './testt.css'

class WalletCard extends Component {

    renderArticle = (key) => {
        return (
            <div className='col'>
                <Article key={key} index={key} data={this.props.data[key]} />
            </div>
        )
    }

    render() {
        return (
            <div className="form-inline">
                {Object.keys(this.props.data).map(this.renderArticle)}
            </div>
            );
        }
    }

export default WalletCard;