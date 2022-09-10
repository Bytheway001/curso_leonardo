import calcularAceleracion from "../ejercicios/ejercicio4.js"
var tests = [
    [[0,20,100], 5],
    [[100,20,0],-5],
    [[60,10,20],-4]

]

var ejercicio1 =  {
    script: calcularAceleracion,
    tests: tests
}
export default ejercicio1
