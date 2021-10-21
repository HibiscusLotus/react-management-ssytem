export function handleUrl(url) {
    const search = {}
    url.slice(url.indexOf('?') + 1)
        .split('&')
        .map(one => {
            let arr = one.split('=')
            search[arr[0]] = arr[1]
        })
    return search
}