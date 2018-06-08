//ocupamos importar requests para usar api
const request = require('request')


//o lugar de guardar la promesa en una variable la vamos a guardar
//en una funcion
function peticionPromesa(){
    return new Promise((resolve,reject)=>{
        request.get("https://swapi.co/api/people/1",(error,response,body)=>{
            if(response.statusCode == 200){
                var json = JSON.parse(body)
                resolve(json)
            }else{
                reject("Error en la peticion")
            }
        })
    });
}

function peticionPromesa2(url){
    return new Promise((resolve,reject)=>{
        request.get(url,(error,response,body)=>{
            if(response.statusCode == 200){
                var json = JSON.parse(body)
                resolve(json)
            }else{
                reject("Error en la peticion")
            }
        })
    });
}
//si usas una promesa te deja ponerle .then o .catch
//si tienes un resolve es lo que te va a tirar a catch y ese es para error
peticionPromesa().then(response => {
                    console.log("Primera peticion")
                    console.log(response.name)
                    return peticionPromesa2(response.films[0])
                })
                .then(response =>{
                    console.log("Segunda promesa resuelta")
                    console.log(response.title)
                })
                .catch(err=> console.log(err))
//then y cathc tienes que ponerle una funcion anonima, y los puedes
//nombrar como quieras, e igualmente la funcion puedes hacer varias cosas {}


/*
1. Hacer una funcion que haga una peticion
(Ejemplo: peticionLibro(“i robot”);http://openlibrary.org/search.json?q=i+robot) 
buscar un libro y traer el o los autores
2.Hacer una petición por autor y devolver la lista de sus libros 
(http://openlibrary.org/search.json?author=asimov)
3. Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse)
 y devolver el género de la banda deseada
4.Devolver los asteroides que sean potencialmente peligrosos 
para la tierra de la semana pasada hasta hoy. 
*/

//1 
function peticionLibro(libro){
    var libroUrl = libro.replace(" ","+")
    return new Promise((resolve,reject)=>{
        request.get(`http://openlibrary.org/search.json?q=${libroUrl}`,(error,response,body)=>{
            if (response.statusCode == 200) {
                var json = JSON.parse(body)
                resolve(json)
            }else{
                reject("error en la peticion")
            }
        });
    });
}

peticionLibro("Harry Potter").then(response=>{
                                console.log("El autor de tu libro es:")
                                console.log(response.docs[0].author_name)
                            })
                            .catch(err=> console.log(err))


//3. Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse)
//y devolver el género de la banda deseada

