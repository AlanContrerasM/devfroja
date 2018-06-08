const request = require('request')

var key = "AIzaSyA-dfnSisztL-OEa9Rv5IXXdxlyVEwGLtw"

var direccion = "Paseo las esmeraldas 35 La Jolla Hermosillo"

var address = direccion.replace(" ", "+")

var url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`


function peticionDireccion(url){
    return new Promise((resolve,reject)=>{
        request.get(`${url}`,(error,response,body)=>{
            if(response.statusCode == 200){
                var json = JSON.parse(body)
                resolve(json.results[0].address_components[4].long_name)
            }else{
                reject("Error en la peticion")
            }
        })
    });
}

peticionDireccion(url).then(response => {
                    console.log(response)
                })

                .catch(err=> console.log(err))


//esto fue la forma manual


