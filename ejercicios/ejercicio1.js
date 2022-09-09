// Crea una función que reciba 2 parámetros, precio e iva, y devuelva el precio con iva incluido. 
// Si no recibe el iva, aplicará el 21 por ciento por defecto

function calcularPrecio(precio, iva) {
    if (!iva) {
        iva = 21
    }
    let porcentaje = iva * precio / 100
    return porcentaje + precio

}


export default calcularPrecio





