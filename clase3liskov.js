class Largometraje {
    constructor(tiempo){
        this.tiempo = tiempo;
    }
    getTiempo(){
        return this.tiempo;
    }

}

class Pelicula extends Largometraje{
    constructor(tiempo, genero) {
        super(tiempo)
        this.genero = genero;
    }
}

class Documental extends Largometraje{
    constructor(tiempo, director) {
        super(tiempo)
        this.director = director;
    }
}

/*
El concepto esta basado en poder unir dos clases abajo
Es decir, pelicula y documental, si necesitabas una funcion o un objeto que 
aplique a los dos, sin modificar el super class

*/
class Cine {
    constructor(largometraje) {
        this.largometraje = largometraje;
    }
    reproducir(){
        return `Reproduciendo... ${this.largometraje.getTiempo()}`;
    }
}

var doc = new Documental("90 min", "Rick");
var peli = new Pelicula("120 min", "Comedia");

var cine = new Cine(doc);

console.log(cine.reproducir());

/* Ejercicio:
Crear la clase construcción que hereda a otras dos clases “casa” y “edificio”
Sus atributos son: num puertas,num ventanas ,  num piso, direccion, altura,largo y ancho del tereno
Cada uno tiene un metodo que regresa los metros cuadrados 
Un metodo que regrese su direccion 
Un metodo que permita modificar su direccion
*/

class Construccion {
    constructor(numPuertas, numVentanas, numPiso, direccion, altura, largo, ancho){
        this.numPuertas = numPuertas;
        this.numVentanas = numVentanas;
        this.numPiso = numPiso;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }
    getMetrosCuadrados(){
        return this.largo * this.ancho;
    }
    getDireccion(){
        return this.direccion;
    }
    setDireccion(nuevaDireccion){
        this.direccion = nuevaDireccion;
    }

}

class Casa extends Construccion{
    constructor(numPuertas, numVentanas, numPiso, direccion, altura, largo, ancho){
        super(numPuertas, numVentanas, numPiso, direccion, altura, largo, ancho)
    }
}

class Edificio extends Construccion{
    constructor(numPuertas, numVentanas, numPiso, direccion, altura, largo, ancho){
        super(numPuertas, numVentanas, numPiso, direccion, altura, largo, ancho)
    }
}
