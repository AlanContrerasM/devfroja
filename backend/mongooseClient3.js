const mongoose = require('mongoose');
//ese link lo sacamos de mlab en users.
mongoose.connect('mongodb://papeleria:a123456@ds041546.mlab.com:41546/papeleria');

console.log(mongoose.connection.readyState)

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId


/*
Crea una 	REST FULL API que tenga para una papelería:
Los artículos tienes los siguientes elementos:
	- Nombre
	- Precio
	- Existencia
	- Descripcion
Crear el CRUD completo para los artículos de la palera

Crear el modelo Factura con los siguiente elementos:
	- RFC
	- Articulos Comprados
	- Sub total
	- iva 
	- total
Crear el CRUD completo para la factura (subTotal,iva y total se inician en 0)
Crear un endpoint para calcularl el subtotal, iva y total de la compra
*/    
const articuloSchema = new Schema({
    article: ObjectId,
    name:String,
    price:Number,
    stock:Number,
    description:String

})

const facturaSchema = new Schema({
    factura: ObjectId,
    rfc:String,
    articulosComprados:[],
    subTotal:0,
    iva:0,
    total:0

})

var Articulo = mongoose.model('Articulo',articuloSchema)
var Factura = mongoose.model('Factura',facturaSchema)

module.exports = {Articulo, Factura}