class Animal{
    constructor(nombre, peso){
        this.nombre = nombre;
        this.peso = peso;
    }

    getNombre(){
        return this.nombre
    }
    
    comer(comida){
        return `Esta comiendo ${comida}`
    }

}
//nuestro papa es el animal
class Perro extends Animal{
//nombre y peso se usan en animal por lo que usamos super
    constructor(nombre, peso, raza, color){
    super(nombre,peso)
    this.raza = raza;
    this.color = color;
}

    ladrar(){
        return `Woof`
    }
}

var nina = new Perro("Nina", 12, "Shih-tzu", "blanco");
console.log(nina)

console.log(nina.comer("lechita"))

//ejercicio en clase
/* 2.-Crearemos una supeclase llamada Electrodomestico con las siguientes características:
	Sus atributos son precio, color, consumo energético y peso.
    El constructor debe de pedir precio, color y peso.
    */

class Electrodomestico{
    constructor(precio, color, consumo, peso){
        this.precio = precio;
        this.color = color;
        this.consumo = consumo;
        this.peso = peso;

    }

    getPrecio(){
        return this.precio;
    }
    getColor(){
        return this.color;
    }
    getPeso(){
        return this.peso;
    }
}

/* 3.- Crearemos una subclase llamada Lavadora con las siguientes características:
Su atributo es carga(kg de ropa), ademas de los atributos heredados.
Crear el metodo precioFinal() (El precio de el consumo energético por la carga)

*/

class Lavadora extends Electrodomestico{
    constructor(precio, color, consumo, peso, carga){
        super(precio, color, consumo, peso);
        this.carga = carga;

    }

    precioFinal(){
        return this.precio + (this.consumo * this.carga)
    }
}

var miLavadora = new Lavadora(500, "azul", 20, "15kg", 5)
console.log(miLavadora);
console.log(miLavadora.getColor());
console.log(miLavadora.precioFinal());