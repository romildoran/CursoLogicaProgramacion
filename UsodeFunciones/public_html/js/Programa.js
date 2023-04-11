/*
 * El factorial de un número es el producto de todos los números enteros positivos desde 1 
 * hasta el numero definido. Por ejemplo, el factorial de 5 se escribe como 5! y se calcula como:
 * 5! = 5 x 4 x 3 x 2 x 1 = 120
 * En términos generales, el factorial de un número n se escribe como n! y se calcula como:
 * n! = n x (n-1) x (n-2) x ... x 2 x 1
 */

function usoFunciones(entrada){
    var dato=entrada.value;
    if(dato>=0 && dato<=150){
        var resultado=factorial(dato);
        limpiar();
        imprimir(resultado);
    }
    else{
        limpiar();
        imprimir("Valor incorrecto. Se acepta entre 0 y 100");
    }
}
function factorial(n){
    if(n==0||n==1){
        return 1;
    }
    else{
        //llamada de funciones recursivas
        return n*factorial(n-1);
    }
}

function imprimir(valor){
    var resultado=document.getElementById("resultado");
    resultado.innerHTML="resultado: "+valor;
}
function limpiar(){
    var resultado=document.getElementById("resultado");
    resultado.innerHTML=" ";
}