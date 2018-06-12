//aqui vamos a probar mongodb
// lo abrimos en este folder por que ya instalamos express y todo
// para usar mongo estamos usando mlab, y mongoose
// instalar mongoose npm install mongoose --save
//Creamos un archivo para que sea el cliente de mongoose mongooseClient.js
var express = require('express')
const bodyParser = require('body-parser')
var app = express()

const Alumno = require('./mongooseClient')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//crear estudiantes
app.post('/api/v1/user/create', (req,res)=>{
    const {nombre,apellidos,age} = req.body
    let nuevoAlumno = Alumno({
        nombre,
        apellidos,
        age,
    })
    nuevoAlumno.save((err,alumno)=>{
        res.status(201).send(alumno)
    })
})

//get todos los alumnos
app.get('/api/v1/alumnos', (req,res)=>{
    Alumno.find().exec().then(alumnos =>{
        res.send(alumnos)
    }).catch(err => {
        res.status(400).send(err)
    })
})


app.listen(3000,()=>{
    console.log('server on 3000')
})