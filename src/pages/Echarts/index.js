import React, { Component, createRef } from 'react'
import { chartData } from '../../api/index'
import Echart from '../../components/Echarts'
import '../../mock/index'
import styles from './index.module.css'


class Echarts extends Component {
    constructor(props) {
        super(props)
        this.chartRef = createRef()
        this.myChart = null
        this.state = {
            charts: [],
        }
    }

    componentDidMount() {
        //获取图表数据
        chartData({ size: 5 })
            .then(res => {
                const charts = []
                res.body.options.map(option => {
                    const template = this.createTemplate()
                    template.series[0].type = option.type
                    template.series[0].data = option.data
                    charts.push(template)
                })
                this.setState({
                    charts
                })
            })
            .catch(e => console.log('出错了'));
    }

    createTemplate() {
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [],
                type: ""
            }]
        }
    }

    render() {
        const { charts } = this.state;
        return <>
            {charts.map((option, index) => {
                return <Echart width="300px" height="300px" chart={option} key={index} />
            })}
        </>
    }
}

export default Echarts