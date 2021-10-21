import mock from 'mockjs'
import { handleUrl } from './until'

mock.setup({
    time: 5000
})

//echarts模拟数据
mock.mock(/127.0.0.1:8088\/chartdata/,
    (req) => {
        const url = req.url
        const type = ['line', 'pie']
        const options = []
        let size
        if (url.indexOf('?') !== -1) {
            const search = handleUrl(url);
            size = search.size ? search.size : 1
        }
        for (let i = 1; i <= size; i++) {
            const option = { data: [] }
            option.type = type[Math.floor(Math.random() * type.length)]
            for (let j = 0; j < 7; j++) {
                option.data.push(Math.floor(Math.random() * 1000))
            }
            options.push(option)
        }
        return {
            status: 1,
            message:'请求成功',
            body: {
                options
            }
        }
    }
)