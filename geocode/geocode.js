const request = require('request');



var geocodeAddress = (address, callback) => {
    var encodedAdress = encodeURIComponent(address);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`,
        json: true
    }, (error, response, body) => {

        if (error) {
            callback('could not connect to google servers.')
        }
        else if (body.status === 'ZERO_RESULTS') {
            callback('could not get that address.')
        }
        var data = {
            Address: body.result[0].formatted_address,
            latitude: body.result[0].geometry.location.lat,
            longitude: body.result[0].geometry.location.lng
        }

        callback(undefined, data);


    });

}

module.exports = {
    geocodeAddress
}