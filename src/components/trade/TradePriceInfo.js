import React, { Component } from 'react';

class TradePriceInfo extends Component {

    rateOfPrice = (nowPrice, closingPrice) => {
        let fluctuation = nowPrice - closingPrice;
        let rate = fluctuation / closingPrice * 100;

        return fluctuation > 0 
                    ? <div style={{color:"red"}}>{( this.unitFormat(fluctuation) + " (" + rate.toFixed(2) + "%)")}</div>
                    : <div style={{color:"blue"}}>{( this.unitFormat(fluctuation) + " (" + rate.toFixed(2) + "%)")}</div>
        
    }

    unitFormat = (str)=>{
        var formatter = new Intl.NumberFormat('ko-KR');
        return formatter.format(str)
    }


    render() {
        console.log(this.props.orderbook.asks)
        let info =
            <div>
                <div className='form-inline'>
                    <div className='col' style={{textAlign:'left'}}>전일가</div><div className='col' style={{textAlign:'right'}}>{this.unitFormat(this.props.currencyInfo.closingPrice)}</div>
                </div>
                <div className='TradePriceInfo-Table-Info form-inline'>
                    <div className='col' style={{textAlign:'left'}}>전일대비</div><div className='col' style={{textAlign:'right'}}>{this.rateOfPrice(this.props.currencyInfo.nowPrice,this.props.currencyInfo.closingPrice)}</div>
                </div>
                <div className='form-inline'>
                    <div className='col' style={{textAlign:'left'}}>고가</div><div className='col' style={{textAlign:'right'}}>{this.unitFormat(this.props.currencyInfo.maxPrice)}</div>
                </div>
                <div className='TradePriceInfo-Table-Info form-inline'>
                    <div className='col' style={{textAlign:'left'}}>저가</div><div className='col' style={{textAlign:'right'}}>{this.unitFormat(this.props.currencyInfo.minPrice)}</div>
                </div>
                <div className='form-inline'>
                    <div className='col' style={{textAlign:'left'}}>거래량</div><div className='col' style={{textAlign:'right'}}>{this.props.currencyInfo.volume}</div>
                </div>
            </div>
        let test =
            <div style={{overflowY:'scroll',width:'100%',height:'100%', padding:5}}>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
                <div>테스트</div>
            </div>
        return (
            <div>
                <table border='1' style={{width:'100%',height:400,textAlign:'center'}}>
                    <thead>
                        <tr>
                            <th style={{width:'35%'}}>매도</th>
                            <th style={{width:'30%'}}>가격</th>
                            <th style={{width:'35%'}}>매수</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>5.000</td><td className='TradePriceInfo-Table-sell'>761,000</td><td rowspan='5'>{info}</td>
                        </tr>
                        <tr>
                            <td>33.0492</td><td className='TradePriceInfo-Table-sell'>760,500</td>
                        </tr>
                        <tr>
                            <td>58.3117</td><td className='TradePriceInfo-Table-sell'>760,000</td>
                        </tr>
                        <tr>
                            <td>53.2636</td><td className='TradePriceInfo-Table-sell'>759,500</td>
                        </tr>
                        <tr>
                            <td>92.7229</td><td className='TradePriceInfo-Table-sell'>759,000</td>
                        </tr>
                        <tr>
                            <td rowspan='5'>{test}</td>
                            <td className='TradePriceInfo-Table-buy'>758,500</td><td>31.6196</td>
                        </tr>
                        <tr>
                            <td className='TradePriceInfo-Table-buy'>758,000</td><td>8.3272</td>
                        </tr>
                        <tr>
                            <td className='TradePriceInfo-Table-buy'>757,500</td><td>86.0000</td>
                        </tr>
                        <tr>
                            <td className='TradePriceInfo-Table-buy'>757,000</td><td>23.9856</td>
                        </tr>
                        <tr>
                            <td className='TradePriceInfo-Table-buy'>756,500</td><td>19.7332</td>  
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TradePriceInfo;