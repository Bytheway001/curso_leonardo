// Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. 
// Si no recibe el iva, aplicará el 21 por ciento por defecto
console.clear()

function calcularPrecio(precio,iva){
 if(!iva){
    iva = 21
 }
 let porcentaje=iva*precio/100
 
 
 
 
 
 
 return porcentaje+precio

 
 
}









// No tocar esto
var tests = [
    [[100, 20], 120],
    [[1000], 1210],
    [[500,50],750]
]

var ejercicio1 =  {
    script: calcularPrecio,
    tests: tests
}
export default ejercicio1
