import React, { Component } from 'react';

class Article extends Component {

    unitFormat = (str)=>{
        var formatter = new Intl.NumberFormat('ko-KR'); 
        return formatter.format(str)
    }

    render() {
        let data = this.props.data

        let profit = data.now_price - data.buy_price;
        let rate = (profit / data.buy_price * 100).toFixed(2);
        return (
           
            data.buy_price !== undefined ?
                <article className="article">
                    <h3 className="article__category">{data.name}</h3>
                    <h2 className="article__title">{this.unitFormat(data.amount)} {data.currency}</h2>
                    <p className="article__excerpt" style={profit>0 ? {color:'red'} : {color:'blue'}}>{this.unitFormat(profit)} ({rate}%)</p>
                </article>
                :
                <article className="article">
                    <h3 className="article__category">{data.name}</h3>
                    <h2 className="article__title">{this.unitFormat(data.amount)} {data.currency}</h2>
                </article>
        );
    }
}

export default Article;