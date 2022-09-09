console.clear()

// PARTE 1
/*
var dia = 2
var mes = 12
var año = 2022

if(dia==25 && mes==12){
    console.log("Merry Christmas")
}
else{
    console.log("te jodiste")
}
*/

// PARTE 2
/*
var a = 5
var b = 5
var c = 5

if(a == b && a == c){
    console.log("la suma es " + parseInt(a+b)*c)
}
*/
// PARTE 3
/*
var a = 1
var b = 2
var c = 6
if(a < 10 && b < 10 && c<10){
    console.log("Son menores que 10")
}
*/
// PARTE 3
/*
var x = 5
var y = 7

if(x>0){
    if(y>0){
        console.log("C1")
    }
    else{
        console.log("C4")
    }
}
else{
    if(y>0){
        console.log("C2")
    }
    else{
        console.log("C3")
    }
}
*/
// PARTE 4

var sueldo = 100
var ant = 5
let aumento = 0;

if(sueldo < 500){
    if(ant >= 10){
        console.log("20%")
        aumento = sueldo/5
      
    }
    else{
        console.log("5%")
        aumento = sueldo/20
    }
}

sueldo = sueldo + aumento

console.log(sueldo)