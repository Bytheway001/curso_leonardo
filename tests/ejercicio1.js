import calcularPrecio from "../ejercicios/ejercicio1.js"
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
