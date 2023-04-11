document.write("Programa para determinar si un numero es par: <br/>");

var num = parseInt(prompt("proporcione un numero: ", 1));

if (num >=0){
    if (num%2==0){
        document.write("SI ES UN NUMERO PAR");
    }
    else {
        document.write ("NO ES NUMERO PAR");
    }
}    
else {
    document.write ("proporcione un numero entero");
}
