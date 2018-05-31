
var a = 5
var b = 10
var c = 15

if(a % b == 0) {
    console.log("se dividen bien!")
} else{
    console.log("no es division perfecta")
}

if(a < b && a < c) {
    console.log('a es el mayor numero')
} else if(b > a && b < c) {
    console.log("b es el mayor numero")
} else if(c < a && c > b) {
    console.log("c es el mayor numero")
} else if(a == b && b == c) {
    console.log("son iguales")
} 


if(a-b < 0) {
    console.log("faltan " + ((a-b)*-1) + " para llegar a ese año")
} else {
    console.log("Han pasado " + (a-b) + " años desde el año actual")
}


for(i = 0; i <= 10000; i++) {
    console.log(i)
}

for(i = 0; i <= 10000; i += 2) {
    console.log(i)
}

var sum = 0
for(i = 0; i <= 3000; i += 2) {
    sum += i
    console.log(sum)
}

var fib = 0
for(i = 0; i <= 3000; i += 2) {
    fib += i * (i+1)
    console.log(fib)
}   

var list = []
for(i = 0; i < 102; i++) {
    list.push(i)
}

console.log(list)

