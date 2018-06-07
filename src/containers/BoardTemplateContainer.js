import React, { Component } from 'react';
import BoardListContainer from '../components/board/boardList/';
import BoardWrite from '../components/board/boardWrite'

class BoardTemplateContainer extends Component {
    render() {
        const to = (this.props.match.params.to === undefined) ? "main" : this.props.match.params.to;

        let screen = null;
        if(to === 'list') screen = <BoardListContainer/>
        if(to === 'write') screen = <BoardWrite/>

        return (
            <div>
                <div className='row'>
                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-8'>
                        {screen}
                    </div>
                    <div className='col-md-2'>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardTemplateContainer;