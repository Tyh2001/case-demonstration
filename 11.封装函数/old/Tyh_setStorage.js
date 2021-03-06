/**
 * 添加本地存储
 * @param { String } name 本地存储名称
 * @param { JSON } data 本地存储的数据
 */

export const setStorage = (name, data) => {
    if (typeof data === 'object') {
        data = JSON.stringify(data)
    }
    window.localStorage.setItem(name, data)
}
