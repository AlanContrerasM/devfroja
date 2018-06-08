
//Declaracion de la promesa
const promesa = new Promise((resolve, reject) => {
    const numero =6
    setTimeout(()=>{
        if(numero > 5){
            resolve("Si es mayor a 5")
        } else{
            reject("No es mayor a 5")
        }
    },1000);
});

promesa.then(data => console.log(data))
        .catch(err => console.log(err))