console.clear();
// Parte 1
/*
var a = 25 
var b = 18
var c = 100

if(a > b){

    if(a>c){
        console.log("El mayor es A")
    }
    else{
        console.log("el mayor es C")
    }
}
else{
    if(b>c){
        console.log("El mayor es B")
    }
    else{
        console.log("El mayor es C")
    }
}
*/

// PARTE 2
/*
var numero = 0

if(numero > 0){
    console.log("Es un numero positivo")
}
else{ // SI NO ES mayor que cero

    if(numero==0){ // En caso de que SEA cero
        console.log("Es CERO")
    }
    else{
        console.log("Es un numero negativo")
    }
   
}
*/

// PARTE 3
/*
var numero = 100
if(numero < 10){
    console.log('1 cifra')
}
else{
    if(numero < 99){
        console.log('2 cifras')
    }
    else{
        console.log('3 cifras')
    }
}
*/
var nombre ='Leonardo'
var numpreguntas = 10
var correctas = 10

let porcentaje = correctas*100/numpreguntas
console.log(porcentaje)
if(porcentaje >= 90){
    console.log("Superior")
}
else{
    if(porcentaje >= 75){
        console.log("Medio")
    }
    else{
        if(porcentaje >=50){
            console.log("Regular")
        }
        else{
            console.log("Fuera de nivel")
        }
    }
   
}