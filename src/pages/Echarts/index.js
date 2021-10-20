import React, { Component, createRef } from 'react'
import { chartData } from '../../api/index'
import Echart from '../../components/Echarts'
import styles from './index.module.css'


class Echarts extends Component {
    constructor(props) {
        super(props)
        this.chartRef = createRef()
        this.myChart = null
        this.state = {
            chart: {
                options: {
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [260, 230, 224, 218, 135, 147, 150],
                        type: 'line'
                    }]
                },
                data: {
                    series: [{
                        data: [260, 230, 224, 218, 135, 147, 150],
                    }]
                }
            },
            chartOption: {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [260, 230, 224, 218, 135, 147, 150],
                        type: 'line'
                    }
                ]
            },
            data: [260, 230, 224, 218, 135, 147, 150]
        }
    }
    // componentDidMount() {


    //     this.updateChart()

    //     this.updateChart(this.state.data)
    //     this.myChart.setOption(this.state.data)
    // }
    // createChart(){
    //   this.myChart1 = charts.init(document.getElementById('chart1'))
    //   this.myChart = charts.init(document.getElementById('chartRef'))
    // }
    // getChartData(){
    //     chartData()
    //     this.updateChart()
    // }
    // updateChart(options) {
    //     this.myChart.setOption(options ? options : this.state.chartOption)
    // }

    render() {
        return <>
            <Echart width='200' height='200' chart={this.state.chart} />
        </>
    }
}

export default Echarts