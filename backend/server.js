var express = require('express')
const bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("hola muchachos")
});
//aqui creamos un json
app.get('/user',(req,res)=>{
    res.send({message:"nodemon"})
});
//puedes meterte a localhost:3000/ o /user

//para crear paths=
app.get('/user/:uid',(req,res)=>{
    //todo lo que nos envie el usuario va a estar en req
    let {uid} = req.params
    res.send({message:`El id que escribiste fue ${uid}`})
});

app.get('/busqueda',(req,res)=>{
    console.log(req.query)
    //si le pidieramos al usuario cualquier cosa y un nombre por ej.
    let {q,nombre} = req.query
    res.send({q,nombre})
    res.send('OK')
})

//ya dentro del postman: http://localhost:3000/busqueda?q=gatitos&&nombre=firulais y si funciona

app.listen(3000, ()=>{
    console.log("Server on 3000")
});

//corremos en terminal un npm start

//con cada cambio cerrar el servidor con ctrl c, y volverlo 
//a empezar npm start
//para no tener que andarlo reseteando el servidor instalamos nodemon
//corremos en terminal nodemon y ya tu file name

//Crear la ruta /suma que reciba como path dos numeros y retorne la suma de ellos
//Crear la ruta /multiplicacion que reciba como query dos numeros y retorne la multiplicacion de ellos

app.get('/suma/:nums',(req,res)=>{
    //todo lo que nos envie el usuario va a estar en req
    let {nums} = req.params
    let numsArray = nums.split("+")
    res.send({message:`Los numeros que escribiste fueron ${nums} y su suma es ${Math.floor(numsArray[0])
        +Math.floor(numsArray[1])}`})
    
});

//Tambien puede ser asi
/*
app.get('/suma',(req,res)=>{
    console.log(req.query)
    //si le pidieramos al usuario cualquier cosa y un nombre por ej.
    let {x,y} = req.query
    res.send({x,y})
    y ya los sumas con Math.floor y lo imprimes
    res.send('OK')
})
*/
//para esto npm install body-parser --save
app.post('/create/user', (req,res)=>{
    let {nombre,apellido} = req.body
    res.status(201).send({id:1,
                        nombre,
                        apellido})
})