module.exports = function() {
    const now = new Date()
    const second = now.getSeconds()
    const minute = now.getMinutes()
    const hour = now.getHours()
    const date = now.getDate()
    const month = now.getMonth() + 1
    const year = now.getFullYear()
    return `${hour}:${minute}:${second} ${date}/${month}/${year}`
}