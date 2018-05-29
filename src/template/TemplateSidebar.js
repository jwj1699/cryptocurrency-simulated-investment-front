import React, { Component } from 'react';

class TemplateSidebar extends Component {
    render() {
        let to = this.props.to;

        return (
            to === 'history' ?
                <div className="col-md-2" style={{height:1300}}>
                    <div style={{fontSize:25,marginTop:50,marginLeft:30}}>나의 잔고</div>
                    <div style={{fontSize:25,marginTop:50,marginLeft:30}}>거래 내역</div>
                </div>
            :
                <div className="col-md-2" style={{height:1300}}>
                    오류
                </div>
        );
    }
}

export default TemplateSidebar;