import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TemplateSidebar extends Component {
    render() {
        let to = this.props.to;

        return (
            to === 'history'|| to === 'wallet' ?
                <div className="col-md-2" style={{height:1300}}>
                    <Link to="/myPage/wallet"><div style={{fontSize:25,marginTop:50,marginLeft:30}}>나의 잔고</div></Link>
                    <Link to="/myPage/history"><div style={{fontSize:25,marginTop:50,marginLeft:30}}>거래 내역</div></Link>
                </div>
            :
                <div className="col-md-2" style={{height:1300}}>
                    오류
                </div>
        );
    }
}

export default TemplateSidebar;