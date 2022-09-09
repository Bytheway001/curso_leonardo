import verificarParidad from "../ejercicios/ejercicio3.js"

// No tocar esto
var tests = [
    [[1], false],
    [[2], true],
    [[3], false],
    [[4], true],
    [[5], false],
    [[6], true],
    [[7], false],
    [[8], true],
    [[9], false],
    [[10], true],

]

var ejercicio2 = {
    script: verificarParidad,
    tests: tests
}
export default ejercicio2
