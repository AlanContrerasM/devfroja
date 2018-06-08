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

  //tambien se puede hacer en modo promesa con el servidor de googles
  //https://github.com/googlemaps/google-maps-services-js

  //ahora si el push 

  //es con postamn, ponemos el link y o lugar de get ponemos post, nos vamos a body, y a raw

  //put es para modificar, tambien es en postman, con put, en body y raw