const request = require('request')

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyA-dfnSisztL-OEa9Rv5IXXdxlyVEwGLtw'
  });


  // Geocode an address.
googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
  }, (err, response)=> {
    if (!err) {
      console.log(response.json.results[0].address_components[5].long_name);
    }else{
        console.log(err)
    }
  });

  