import React, { Component } from 'react';
import UxcoreTable from 'uxcore-table';

class BoardList extends Component {

    testt = (rowData) => { 
        console.log(rowData)
    return <div style={{textAlign:"center"}}><a href='/'>{rowData}</a></div>; 
    }


    render() {

        let columns = [
            { title: '번호', dataKey: 'no', align: 'center',width: '10%' },
            { title: '카테고리', dataKey: 'category', align: 'center',width: '10%' },
            { title: '제목', dataKey: 'action', dataKey: 'title', width: '50%', render : this.testt},
            { title: '작성자', dataKey: 'writer', align: 'center',width: '10%' },
            { title: '날짜', dataKey: 'date', align: 'center',width: '15%' },
            { title: '조회수', dataKey: 'hit', align: 'center',width: '5%' }
        ]


        return (
            <div>
                <UxcoreTable 
                            jsxcolumns ={columns} jsxdata={this.props.data} 
                            showHeaderBorder={true}
                            showSearch={true}
                            showPagerSizeChanger={false}
                            showPagerTotal={false}
                            showPagerQuickJumper={false}
                            size='small'/>
            </div>
        );
    }
}

export default BoardList;