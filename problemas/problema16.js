console.clear();

// Hacer una funcion que va desde A hasta B e imprime el doble del valor actual si el numero es par
// a = 3, b = 100 => 3,6,9,12


function imprimirDoble(a,b){
    while(a<b){
        if(a%2 == 0){
           console.log(a*2)
        }
        a++;
    }
}

imprimirDoble(1,100)

