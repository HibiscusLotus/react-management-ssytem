import React, { useState, useRef, useEffect } from 'react'
import * as charts from 'echarts'


function Echart(props) {
    const chart = useRef();
    const option = useState(props.chart)
    let myChart
    useEffect(() => {
        myChart = charts.init(chart.current)
        // myChart.setOption(props.chart)
        myChart.setOption(option)
    }, [])
    return <div style={{ width: '200px', height: '200px' }} ref={chart} />
}

export default Echart