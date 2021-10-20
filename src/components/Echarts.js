import React, { useState, useRef, useEffect } from 'react'
import * as charts from 'echarts'


function Echart(props) {
    const chart = useRef();
    const [chartData] = useState(props.chart.data)
    let myChart
    useEffect(() => {
        myChart = charts.init(chart.current)
        myChart.setOption(props.chart.options)
    }, [])
    useEffect(() => {
        myChart.setOption(chartData)
    }, [chartData])
    return <div width={props.width} height={props.height} ref={chart} />
}

export default Echart