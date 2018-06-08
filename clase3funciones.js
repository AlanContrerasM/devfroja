// funciones normales y arrow functions

// normales

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
console.log(toCelsius(115));

//arrow

function suma(a,b){
    return a + b;
}

//esta es la arrow, no ocupa ni return
var suma1 = (a,b) => a+b;
//con un solo parametro
var suma2 = a => a;
//sin parametros
var suma3 = () => "Cool";
//de varias cosas en el codigo por ejecutar
var suma4 =(a,b,c) => {
    //bloque de codifo
}

var x = suma(6,6)
console.log(x)


//Ejercicios
/*
Hacer una función que convierta de grados centígrados a Farenheit.
Hacer una función que muestre la tabla de multiplicar de un número.
Pasar de decimal a binario
Función que pida N parametros y devuelva cuantos parametros se le pasaron
Leer un array de enteros y sacar su media
*/



//Hacer una función que convierta de grados centígrados a Farenheit.
//Formula para convertir de celsius a fahrenheit T(°F) = 20°C × 9/5 + 32 = 68 °F

var sacarFahrenheit = celsius => (celsius*(9/5) + 32)

console.log(`24 celsius son ${sacarFahrenheit(24)} Fahrenheit`)




//Fahrenheit a celsius
function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}
console.log(toCelsius(115));

var celsius = fahrenheit =>  (5/9)*(fahrenheit-32);

//Tabla de multiplicar de un numero

var tablaMultiplicar = numero => {
    for(i=1; i<11; i++){
        console.log(`${i} x ${numero} = ` + (i*numero))
    }
}
tablaMultiplicar(6);

//pasar de decimal a binario

//funcion que tome n parametros, y devuelva cuantos parametros le pasaron

var parametros = (...x) => {
    console.log(x.length)
}

parametros(1,2,3,5)


//Leer un array de enteros y sacar su media

