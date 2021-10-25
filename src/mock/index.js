import mock from 'mockjs'
import { login, echartsData, tabData } from './method'

mock.setup({ time: 5000 })

//echarts模拟数据
mock.mock(/127.0.0.1:8088\/login/,login)
mock.mock(/127.0.0.1:8088\/echartsData/, echartsData)
mock.mock(/127.0.0.1:8088\/tabData/, tabData)