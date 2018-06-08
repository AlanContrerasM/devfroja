const request = require('request');
/*
request.get('http://pokeapi.co/api/v2/pokemon/1',
            (error,response,body)=>{
                console.log(`Error -> ${error}`)
                console.log(`Response -> ${response.statusCode}`)
                var json = JSON.parse(body)
                if(response.statusCode == 200){
                    console.log("Peticion exitosa")
                    console.log(json.name)
                    for(i=0;i<json.moves.length;i++){
                        console.log(json.moves[i].move.name)
                    }

                }else{
                    console.log("Tuvimos un error")
                }
                console.log(`Body -> ${JSON.parse(body)}`)
            });

*/

var getMovieTitle = (liga) =>{
    request.get(`${liga}`,
            (error,response,body)=>{
                console.log(`Error -> ${error}`)
                console.log(`Response -> ${response.statusCode}`)
                var json = JSON.parse(body)
                if(response.statusCode == 200){
                    console.log("Peticion exitosa")
                    console.log(`The film name is ${json.title}`)

                }else{
                    console.log("Tuvimos un error")
                }
            });
}

request.get('https://swapi.co/api/people/1/',
            (error,response,body)=>{
                console.log(`Error -> ${error}`)
                console.log(`Response -> ${response.statusCode}`)
                var json = JSON.parse(body)
                if(response.statusCode == 200){
                    console.log("Peticion exitosa")
                    console.log(json.name)
                   
                    getMovieTitle(json.films[0])
                }else{
                    console.log("Tuvimos un error")
                }
                console.log(`Body -> ${JSON.parse(body)}`)
            });