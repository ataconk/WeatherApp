const request = require('request')


const getAdvise = (callback) => {
    const url = "https://api.adviceslip.com/advice"

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to get advise :(', undefined)
        } else if (body.error) {
            callback(body.error, undefined)
        } else {
            callback(undefined, body.slip.advice)
        }
    })
}

module.exports = getAdvise