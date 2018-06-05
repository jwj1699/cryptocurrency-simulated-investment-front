import React, { Component } from 'react';


class TradeOrder extends Component {

    render() {
        console.log(this.props.tradeType)
        return (
            <form style={{border:'1px solid gray', padding:10}}>
                <div class="form-group">
                    <label for="orderQuantity" style={{marginLeft:20}}>수량</label>
                    <input type="number" min='0' class="col-md-8 form-control" id="orderQuantity" style={{float:'right'}}/>
                </div>
                <div class="form-group">
                    <label for="orderPrice" style={{marginLeft:20}}>가격</label>
                    <input type="number" min='0'  class="col-md-8 form-control" id="orderPrice" style={{float:'right'}} step={this.props.step}/>
                </div>
                <div style={{textAlign:'right'}}>
                    <p>총 000,000,000 {this.props.tradeType==='매도'? "원" : this.props.unit}</p>
                </div>
                <div className='row'>
                    <div className='col-md-5'>
                    </div>
                        <button class=" col-md-2 btn" type="button" style={ this.props.tradeType==='매수'?{color:'white',backgroundColor:'red'} : {color:'white',backgroundColor:'blue'} }>{this.props.tradeType}</button>
                    <div className='col-md-5'>
                    </div>
                </div>

            </form>
        );
    }
}

export default TradeOrder;