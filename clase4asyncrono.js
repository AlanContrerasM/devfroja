//asyncrono pasa primeroo el script, lo pasa a la cola, y cuando es algo pesado 
//se pasa a la pila, y este lo regresa con un callback cuando esta listo.

console.log(10)
console.log(20)
console.log(30)

//podemos usar setTimeout para decir cuando se corra

//setTimeout recibe dos parametros, lo que ejecuta, y el tiempo para esperar
//aqui empezamos con una funcion anonima
setTimeout(()=>{
    //Dentro de esta funcion anonima
    // va a regresar lo que tenga que regresar
    console.log(40)
},3000); /*son tres segundos*/

console.log(50);

//cuello de botella, la manera mas facil es el uso de for, el 40 se quedo en la pila, y tiene que esperar 
//el siguiente for se queda en la cola, por lo que no nos llega el callback de 40, hasta que terminamos el for
console.log(1)
for(let i=0; i<9999999999; i++);

console.log(3)


//en cuanto metes una funcion dentro de otra funcion haces un callback
//cuando haces un callback este se manda a la pila
//cuidado con los callback hells.
