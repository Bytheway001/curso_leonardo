import calcularNota from "../ejercicios/ejercicio2.js"
var tests = [
    [[0], "Deficiente"],
    [[1], "Deficiente"],
    [[2], "Deficiente"],
    [[3], "Deficiente"],
    [[4], "Insuficiente"],
    [[5], "Insuficiente"],
    [[6], "Suficiente"],
    [[7], "Suficiente"],
    [[8], "Excelente"],
    [[9], "Excelente"],
    [[10], "Perfecto"],

]

var ejercicio2 = {
    script: calcularNota,
    tests: tests
}
export default ejercicio2
