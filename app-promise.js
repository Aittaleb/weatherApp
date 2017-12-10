const yargs = require('yargs');
const request = require('request');
const axios = require('axios');



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

    var encodedAdress = encodeURIComponent(argv.address);
    var geocodeUrl = `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`;

    axios.get(geocodeUrl)
    .then((response) => {
        if(response.data.status === 'ZERO_RESULTS'){
            throw new Error('unable to find that address');
        }

        var latitude = response.data.results[0].geometry.location.lat;
        var longitude = response.data.results[0].geometry.location.lng;

        var weatherUrl = `https://api.forecast.io/forecast/${apiKey}/${longitude},${latitude}`; 
        console.log(response.data.results[0].formatted_address);
        return axios.get(weatherUrl)
    }).then((response) => {
        var temperature = response.data.currently.temperature;
        var apparentTemperature = response.currently.apparentTemperature;
        console.log(`the temperature today is ${res.temperature} but it actually feels like ${res.apparentTemperature}`)
    })
    .catch((e) => {
        if(e.code === 'ENOTFOUND'){
            console.log('Unable to connect to api Servers');
        }
        else{
            console.log(e.message);
        }
        
        console.log(e);
        });








