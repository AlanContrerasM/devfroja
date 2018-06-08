const request = require("request")

const URL_BASE = "https://goodreads-devf-aaron.herokuapp.com/api/v1/"

function getAllAuthors(){
    const URI = "authors/"
    var url = URL_BASE + URI

    return new Promise ((resolve, reject)=>{
        request.get(url,(err, status, body)=>{
            status.statusCode == 200
            ? resolve(JSON.parse(body))
            : reject("Error")
        })
    })
}

function createAuthor(name, lastName, biography, gender, age){
    const URI = "authors/"
    var url = URL_BASE + URI
    let jsonSend = {
        "name":name,
        "last_name":lastName,
        "nacionalidad":"MX",
        "biography":biography,
        "gender":gender,
        "age":age
    }
    return new Promise((resolve, reject)=>{
        request.post({url:url, form:jsonSend}, (err,status,body)=>{
            status.statusCode == 201
            ? resolve(JSON.parse(body))
            : reject("Error")
        });
    });
}


function getAuthor(id){
    const URI = "authors/"
    console.log(id)
    var url = URL_BASE + URI + id + "/"
    return new Promise ((resolve, reject)=>{
        request.get(url,(err, status, body)=>{
            status.statusCode == 200
            ? resolve(JSON.parse(body))
            : reject("Error")
        })
    })
}

function isAlive(json){
    const URI = "authors/"
    var url = URL_BASE + URI + json.id +"/"
    let jsonSend = {
        "name":json.name,
        "last_name":json.last_name,
        "nacionalidad":"MX",
        "biography":json.biography,
        "gender":json.gender,
        "age":json.age,
        "is_alive":true

    }
    return new Promise((resolve, reject)=>{
        request.put({url:url, form:jsonSend}, (err,status,body)=>{
            status.statusCode == 200
            ? resolve(JSON.parse(body))
            : reject("Error")
        });
    });
}

createAuthor("Alansin","Pirrin","El mas shaka", "M", 22)
            .then(data =>{
                console.log(data)
                return getAuthor(data.id)
            })
            .then(element =>{
                console.log(element)
                return isAlive(element)
            })
            .then(data=>console.log(data))
            .catch(err => console.log(err))


/*
getAllAuthors().then(data => console.log(data))
                .catch(error => console.log(error))

*/


