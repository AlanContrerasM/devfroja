var lista = [2,4,6,8,3];

console.log(lista);

var amigos = ["Jose", "Vicky", "Fofo", "Smamy", "Puam"]

console.log(amigos)
//pasar al principios
amigos.unshift("Andres");
console.log(amigos);

//Pasar al final
amigos.push("Pedrone");
console.log(amigos);

//Colocar donde quieras con splice, pero elimina
amigos.splice()

//.length es super utilizable.

//.sort es para ordenar alfabeticamente
//.reverse es para invertirlo
console.log(amigos.reverse())


//strings to arrays
var hola = "Hola como estas!"

var holaSplit = hola.split(" ");

console.log(holaSplit);

console.log(holaSplit.join(" "))

//ejercicios

/*
Leer el nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del empleado que más gana.
Guardar en un array los 20 primeros números pares.
Hacer una funcion que calcule el tiempo necesario para que un automóvil que se mueve con una velocidad de 73000 m/h recorra una distancia de 120 km. (TIEMPO = d/v)
Hacer los primeros 10 dígitost de serie Fibbonacci
Crear una funcion que reciba como parametro una oración y defina si es palindromo.
*/

class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }
    getNombre(){
        return this.nombre;

    }
    getSueldo(){
        return this.sueldo;
    }
}

var list = []
for(i=0;i<9;i++){
    
    list.push(new Empleado(`Empleado${i}`, Math.floor(Math.random()*100)))
}
console.log(list)

var masSueldo = () =>{
    var mejorPagado = list[0]
    for(i=1;i<list.length;i++){
        if(list[i].getSueldo()>list[i-1].getSueldo){
            mejorPagado = list[i];
        }
    }
    return mejorPagado;
}

console.log(masSueldo())


//fibonacci

var fib =[0,1]

var getFib = fibNum => {
    var fib1 = 1;
    var fib2 = 0;
    for(i=2; i<=fibNum;i++){
        fib.push(fib1+fib2)
        var newFib2 = fib2;
        fib2 = fib1
        fib1 = (fib1+newFib2);
    }
    return console.log(fib)
}

getFib(10);