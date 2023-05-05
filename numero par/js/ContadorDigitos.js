document.write("Programa para contar el numero de digitos de un numero entero positivo: <br/>");

var num = parseInt(prompt("porporcione un numero entero positivo", 1));

var contador_digitos = 0;

while (num >= 1){
    num = num/10;
    //contador_digitos = contador_digitos+1;
    contador_digitos++;
}

document.write("El numero proporcionado contiene "+contador_digitos+" digitos");