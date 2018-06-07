import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class WalletChart extends Component {

    option = {
        title: {
            text: '월별 수익률',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'line'        // 'line' | 'shadow'
            },
            formatter: function (params) {
                var tar;
                if (params[1].value != '-') {
                    tar = params[1];
                }
                else {
                    tar = params[2];
                }
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        xAxis: {
            type : 'category',
            splitLine: {show:false},
            data :  this.props.xAxis
        },
        yAxis: {
            type : 'value'
        },
        series: [
            {
                name: '수익',
                type: 'bar',
                stack: '손익',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                data: this.props.seriesProfit
            },
            {
                name: '손해',
                type: 'bar',
                stack: '손익',
                label: {
                    normal: {
                        show: true,
                        position: 'bottom'
                    }
                },
                data: this.props.seriesLoss
            },
            {
                    name:'누적수익(월)',
                    type:'line',
                    data: this.props.cumulate
                }
            
        ]
    };
    

    render() {
        
        return (
            <div>
                <ReactEcharts 
                    option={this.option}
                    style={{height: '400px', width: '100%'}}/>
            </div>
        );
    }
}

export default WalletChart;