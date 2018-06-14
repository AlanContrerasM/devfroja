//maps es una forma de iterar sin usar for

var lista = [1,3,2,5,4,6,8,7,9,0]

var obj = [
    {data:"hola",nombre:"Pedro"},
    {data:"holi",nombre:"juan"},
    {data:"carnal",nombre:"Galans"},
]

//x es cada uno, y es los indices, y z imprime la lista las veces que itero
lista.map((x,y,z)=>{
    console.log(x)
})

let listaNueva = obj.map((x,y,z)=>{
    return x.nombre
})

console.log(listaNueva)

var obj2 = [
    {data:"hola",nombre:"Pedro",edad:24},
    {data:"holi",nombre:"juan",edad:15},
    {data:"carnal",nombre:"Galans",edad:19},
]

//agrega los que cumplen la condicion
let listaMayores = obj2.filter((x,y,z)=>{
    return x.edad > 17
})

console.log(listaMayores)