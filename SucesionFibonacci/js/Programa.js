/*
 * La serie de Fibonacci es una serie de números 
 * en la que cada número es la suma de los dos números anteriores. 
 * La serie comienza con 0 y 1, y los primeros números son:
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 */

function sucesionFibonacci(entrada){
    limpiar();
    /*
     * Manejo de la secuencia de Fibonacci
     * Valor a = tiene el valor actual
     * Valor b = tiene el valor nuevo
     * Valor c = tendra el valor siguiente
     */
    //Asignamos los valores iniciales
    var a = 0;
    var b = 1;
    var c = null;
    var nMaximoElementos = 100;
    var elementosSerie = entrada.value;
    
    //Validamos la entrada
    if(elementosSerie>nMaximoElementos){
        imprimir("Debes probar con menos de 100 elementos");
        return;
    }
    //Imprimir los valores iniciales
    imprimir (a);
    imprimir (b);
    
    //Realizamos la iteracion
    for(i=0; i<elementosSerie-2; i++){
        c=a+b;//Valor siguiente
        a=b;
        b=c;
        imprimir(c);
    }
    
}

function imprimir(valor){
    document.getElementById("resultado").innerHTML+=valor+" ";
}
function limpiar(){
    document.getElementById("resultado").innerHTML+" ";
}