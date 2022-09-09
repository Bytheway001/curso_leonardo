console.clear()
import ejercicio1 from './ejercicios/ejercicio1.js'
import ejercicio2 from './ejercicios/ejercicio2.js'
import ansi from 'ansi-colors-es6';
var tests = [
    [[100, 20], 120],
    [[1000], 1210]
]

function fail(string) {
    console.log(ansi.red(string))
}
function success(string) {
    console.log(ansi.green(string))
}

function doTest(callback, args, expect) {

    let result = callback(...args)
    if ( result == expect) {
        success(`${callback.name} ha pasado el test con argumentos ${args}`)
    }
    else {
        fail(`Test de function ${callback.name} Fallido, se con parametros ${args}, se esperaba ${expect} y se obtuvo ${result}` )
    }

}


[ejercicio1,ejercicio2].forEach(ejercicio=>{

    ejercicio.tests.forEach(e=>{
       
        doTest(ejercicio.script,...e)
    })
})


