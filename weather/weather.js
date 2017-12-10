const request = require('request');


const apiKey = '13qsdqs321qsd32q1sdqsd';
var getWeather = (longitude, latitude, callback) => {

    request({
        url: `https://api.forecast.io/forecast/${apiKey}/${longitude},${latitude}`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
            callback(undefined, { 
                temperature : body.currently.temperature ,
                apparentTemperature : body.currently.apparentTemperature
            })
            // console.log();
        } else {
            callback('unable to fetch weather data .');
        }

    })

}

module.exports = {
    getWeather
}
