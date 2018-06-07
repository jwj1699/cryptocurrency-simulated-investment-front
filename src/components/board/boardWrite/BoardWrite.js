import React, { Component } from 'react';

class BoardWrite extends Component {
    render() {
        return (
            <form>
                <div style={{margin:40,marginBottom:50}}>
                    <h3>글쓰기</h3>
                </div>
                <div className='form-froup'>
                    <label for="title">글제목:</label>
                    <input type="text" class="form-control" id="title"/>
                </div>
                <div className='form-froup' style={{marginTop:20, marginBottom:30}}>
                    <label for="category">카테고리:</label>
                    <select class="form-control col-md-2" id="category">
                        <option value="잡담" selected="selected" >잡담</option>
                        <option value="정보">정보</option>
                        <option value="BTC">BTC</option>
                        <option value="ETH">ETH</option>
                        <option value="ETC">ETC</option>
                        <option value="XRP">XRP</option>
                        <option value="LTC">LTC</option>
                    </select>
                </div>
                <div className='form-froup'>
                    <textarea class="form-control" rows="20" id="comment"></textarea>
                </div>
                <div className='row'>
                    <div className='col-md-5'>
                    </div>
                        <button className="col-md-2 btn btn-sm" type='summit' style={{marginTop:20}}>작성</button>
                    <div className='col-md-5'>
                    </div>
                </div>
            </form>
        );
    }
}

export default BoardWrite;

