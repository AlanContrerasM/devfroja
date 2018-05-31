// Clase 2 devf cinta roja 
console.log("Listos para aprender objetos!")

// Un objeto es una colección de propiedades y metodos
/* 
Ejemplo un carro:
Atributos: color, velocidad, ruedas
Metodo: arranca(), frena(), metodos y funciones son practicamente lo mismo.
*/

//Vamos a crear el molde para crear objetos
//clases empiezan con mayuscula
class Perro{
    //metodo constructor, siempre usarlo
    constructor(color, pelaje, raza, tamano){
        console.log("Se ejecuto el metodo constructor")
        //aqui van a ir los atributos que se necesitan para crear los perros
        this.color = color;
        this.pelaje = pelaje;
        this.raza = raza;
        this.tamano = tamano;
    }

    nacer(){
        console.log("Ya naci");
    }
    ladrar(){
        console.log(this.raza + " la esta jugando");
    }
}

var fido = new Perro('Negro', "Liso", "Pug", "Chiquito");
var nina = new Perro("Blanca", "Largo", "Shih-tzu", "Chiquita")
console.log(fido);
nina.ladrar();
fido.ladrar();


//Crear un objeto de tipo triangulo con atributos 
//base y altura y tener el metodo  area y perimetro.

class Triangulo{
    constructor(base, altura){
        this.base = base;
        this.altura = altura;
    }

    area(){
        console.log((this.base * this.altura)/2 + " metros cuadrados")
    }
    perimetro(){

    }
}
var triangulo1 = new Triangulo(4, 5)
triangulo1.area()

class Persona{
    constructor(nombre, edad, sexo, peso, altura){
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo;
    this.rfc = nombre + edad.toString() 
    this.peso = peso;
    this.altura = altura;
    }

    calcularIMC(){
        var imc = this.peso/(this.altura*this.altura)
        console.log(imc)
    }

    esMayorDeEdad(){
        if(this.edad > 17){
            console.log("Es Mayor de Edad");
        } else {
            console.log("No es mayor de edad");
        }
    }

}

var alan = new Persona("Alan", 22,"Hombre", 72, 1.78)

console.log(alan)
alan.calcularIMC();
alan.esMayorDeEdad();