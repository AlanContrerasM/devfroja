const mongoose = require('mongoose');
//ese link lo sacamos de mlab en users.
mongoose.connect('mongodb://prueba:tecalancm0895@ds255740.mlab.com:55740/practica1');

console.log(mongoose.connection.readyState)

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId


const alumnoSchema = new Schema({
    alumno: ObjectId,
    nombre:String,
    apellidos:String,
    age:Number,
    email:String,
    city:String

})

var Alumno = mongoose.model('Alumno',alumnoSchema)

module.exports = Alumno