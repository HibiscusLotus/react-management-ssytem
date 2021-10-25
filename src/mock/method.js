import { handleUrl } from './until'

export function login(req) {
    const body = JSON.parse(req.body)
    if (body.username && body.password) {
        if (body.username === 'admin') {
            return {
                status: 1,
                message: '请求成功',
                body: {
                    uuid: 'sdf3sd5343',
                    uname: 'admin'
                }
            }
        } else {
            return {
                status: 1,
                message: '请求成功',
                body: {
                    uuid: 'asdv23asd353',
                    uname: 'user'
                }
            }
        }
    }
    return {
        status: 3,
        message: '缺少必要参数',
    }
}

export function echartsData(req) {
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
        message: '请求成功',
        body: {
            options
        }
    }
}

export function tabData(req) {
    const data = {
        unread: [{
            key: '1',
            date: '2019-05-22 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护',
        }, {
            key: '2',
            date: '2019-05-22 21:00:00',
            title: '今晚12点整发大红包，先到先得',
        }],
        read: [{
            key: '3',
            date: '2019-05-22 20:00:00',
            title: '【系统通知】该系统将于今晚凌晨2点到5点进行升级维护'
        }],
        recycle: [{
            key: '4',
            date: '2019-05-22 20:00:00',
            title: '该系统将于今晚凌晨2点到5点进行升级维护'
        }]
    }
    return {
        status: 1,
        message: '请求成功',
        body: {
            data
        }

    }
}