//ocupamos importar requests para usar api
const request = require('request')
//4.Devolver los asteroides que sean potencialmente peligrosos 
//para la tierra de la semana pasada hasta hoy. 

function asteroidesPeligrosos(){
    return new Promise((resolve,reject)=>{
        request.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2018-05-29&end_date=2018-06-05&detailed=false&api_key=3Gpxe9dLx8IhUt1dkZI3Wkmq4kLSPAGfjRbkjcdh`,(error,response,body)=>{
            if (response.statusCode == 200) {
                var json = JSON.parse(body)
                resolve(json)
            }else{
                reject("error en la peticion")
            }
        });
    });
}

class Asteroide{
    constructor(nombre, peligroso){
        this.nombre = nombre;
        this.peligroso = peligroso;
    }
    getNombre(){
        return this.nombre;

    }
    getPeligroso(){
        return this.peligroso;
    }
}

var astePeligrosos = []
asteroidesPeligrosos().then(response=>{
                                var asteArray = Object.keys(response.near_earth_objects)
                                for(i=0;i<asteArray.length;i++){
                                    astePeligrosos = []
                                    var fecha = asteArray[i]
                                    console.log(`\n`+`\n`+`Asteroides peligrosos de la fecha: ${fecha}:`+`\n`)
                                    var asteroides = response.near_earth_objects[fecha]
                                    asteroides.forEach(function(contenido){
                                        if(contenido.is_potentially_hazardous_asteroid == true){
                                            astePeligrosos.push(new Asteroide(`Asteroide: ${contenido.name}`,
                                            `Es peligroso`))
                                        }
                                
                                    });
                                    console.log(astePeligrosos)
                                }
                            
                            
                            })
                        .catch(err=> console.log(err));

