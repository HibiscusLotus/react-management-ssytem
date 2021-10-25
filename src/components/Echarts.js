import React, { useState, useRef, useEffect } from 'react'
import * as charts from 'echarts'


function Echart(props) {
    const chart = useRef()
    let myChart
    useEffect(() => {
        myChart = charts.init(chart.current)
        console.log(props.chart.series)
        myChart.setOption(props.chart)
    }, [])
    return <div style={{ width: props.width, height: props.height, display: 'inline-block' }} ref={chart} />
}

export default Echart