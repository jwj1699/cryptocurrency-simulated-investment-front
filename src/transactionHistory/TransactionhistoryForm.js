import React, { Component } from 'react';

class TransactionhistoryForm extends Component {
    render() {
        return (
            <div>
                <form className='form-inline col-md-11 HistoryForm'>
                    <div className='form-group col-md-5'>
                        <label className='form-label'>기간설정</label>
                        <input className='form-control col-md-4'/>  ~  <input className='form-control col-md-4'/>
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='form-label'>코인</label>
                        <select className='custom-select form-select' id='' style={{width:'60%'}}>
                            <option value='all' selected>전부</option>
                            <option value="비트코인">비트코인</option>
                            <option value="이더리움">이더리움</option>
                            <option value="이더리움클래식">이더리움클래식</option>
                            <option value="리플">리플</option>
                            <option value="라이트코인">라이트코인</option>
                        </select>
                    </div>
                    <div className='form-group col-md-3'>
                        <label className='form-label'>구분</label>
                        <select className='custom-select form-select' id='' style={{width:'60%'}}>
                            <option value='all' selected>전부</option>
                            <option value="매수">매수</option>
                            <option value="매도">매도</option>
                        </select>
                    </div>
                    <div className='from-group col-md-1'>
                        <button type="submit" class="btn btn-default" style={{paddingLeft:30,paddingRight:30}}>조회</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TransactionhistoryForm;