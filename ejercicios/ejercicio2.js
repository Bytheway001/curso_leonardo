/**
 Crear una funcion que pide una nota (numero) y muestra la calificacion segun la nota obtenida
 0-3 => Deficiente
 4-5 => Insuficiente
 6-7 => Suficiente
 8-9 => Excelente
 10 => Perfecto

*/


function calcularNota(nota) {
    if (nota <= 3) {
        return "Deficiente"
    }
    if (nota <= 5) {
        return "Insuficiente"
    }
    if (nota <= 7) {
        return "Suficiente"
    }
    if (nota <= 9){
        return "Excelente"
    }
    if (nota > 9){
        return "Perfecto"
    }
}

export default calcularNota