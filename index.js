console.clear()
if (!process.argv.slice(2)[0]) {
    fail("No se ha indicado un ejercicio")
    process.exit()
}

const nombre = process.argv.slice(2)[0]
const { default: ejercicio } = await import(`./tests/${nombre}.js`)
import ansi from 'ansi-colors-es6';
console.log(ansi.bgGreen("Inicializando tests"))
function fail(string) {
    console.log(ansi.red(string))
}
function success(string) {
    console.log(ansi.green(string))
}

function doTest(callback, args, expect) {

    let result = callback(...args)
    if (result == expect) {
        success(`${nombre} ha pasado el test con argumentos ${args}`)
        return true
    }
    else {
        fail(`Test de ${nombre} Fallido con parametros ${args}, se esperaba ${expect} y se obtuvo ${result}`)
        return false
    }

}

let realizados = 0;
let pasados = 0;
let fallidos = 0;

ejercicio.tests.forEach(e => {
    realizados++;

    if (doTest(ejercicio.script, ...e)) {
        pasados++
    }
    else {
        fallidos++
    }
})
console.log(`Resultados del test:`, { realizados, pasados, fallidos })
