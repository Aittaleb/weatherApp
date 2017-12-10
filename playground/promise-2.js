const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAdress = encodeURIComponent(address);

        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAdress}`,
            json: true
        }, (error, response, body) => {

            if (error) {
                reject('could not connect to google servers.')
            }
            else if (body.status === 'ZERO_RESULTS') {
                reject('could not get that address.')
            }

            else if (body.status === 'OK')
                resolve({
                    Address: body.result[0].formatted_address,
                    latitude: body.result[0].geometry.location.lat,
                    longitude: body.result[0].geometry.location.lng
                });

        })

    })
};

geocodeAddress('40000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}).catch((errorMessage) => {
    console.log(errorMessage);
});

