console.clear()
/*
* Realizar la carga del lado de un cuadrado, mostrar por pantalla el perímetro del mismo (El perímetro de un cuadrado se calcula multiplicando el valor del lado por cuatro)
* Escribir un programa en el cual se ingresen cuatro números, calcular e informar la suma de los dos primeros y el producto del tercero y el cuarto.
* Realizar un programa que lea cuatro valores numéricos e informar su suma y producto.
* Se debe desarrollar un programa que pida el ingreso del precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe abonar el comprador (Ingresar por teclado un precio sin decimales, es decir un entero: 2, 7, 90 etc.)
*/

////////// PARTE 1 /////
var lado = 16;

let perimetro = lado * 4
//console.log(perimetro)
////////// PARTE 2 /////
let numero1=1
let numero2=2
let numero3=3
let numero4=4
let suma = parseInt(numero1) + parseInt(numero2)
let producto = parseInt(numero3) + parseInt(numero4)
//console.log("La suma de los dos primeros es "+suma)
//console.log("El producto de los dos ultimos es "+producto)
////////// PARTE 3 /////
let suma2 = parseInt(numero1) + parseInt(numero2)+parseInt(numero3)+parseInt(numero4)
let producto2 = parseInt(numero1) * parseInt(numero2) * +parseInt(numero3) * parseInt(numero4)
console.log("La suma es "+suma2);
console.log("El Producto es "+producto2);











