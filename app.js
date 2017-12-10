const yargs = require('yargs');
const request = require('request');


const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');





const argv = yargs.options({

    a: {
        demand: true,
        alias: 'address',
        string: true,
        describe: 'adress to get weather for'
    }
})
    .help()
    .alias('help', 'h')
    .argv;



geocode.geocodeAddress(argv.address, (errorMessage, result) => {
    if (errorMessage) {
        console.log(errorMessage);
    }
    else {
        console.log(result.address);

        weather.getWeather(result.longitude, result.latitude, (error, res) => {
            if (error) {
                console.log(error);
            }
            // console.log(JSON.stringify(res , undefined , 2));
            console.log(`the temperature today is ${res.temperature} but it actually feels like ${res.apparentTemperature}`)
        })


    }
});




