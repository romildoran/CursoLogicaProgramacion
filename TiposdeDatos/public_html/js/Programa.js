document.write("Programa para el manejo de tipos de datos: </br>");

//Manejo de tipos de datos

//Cadena:
var cadena = "Hola desde Javascript";
document.write("Valor cadena: "+cadena+"</br>");
document.write("</br>");

// numeros

var num1=15;
var num2=parseInt("20");
var num3=num1+num2;
document.write("Valor num1: "+num1+"</br>");
document.write("Valor num2: "+num2+"</br>");
document.write("Valor num3: "+num3+"</br>");
document.write("</br>");

//Booleanos

var bandera= true;
var resultado = (num1==num2);
document.write("Valor bandera: "+bandera+"</br>");
document.write("Valor resultado: "+resultado+"</br>");
document.write("</br>");
var tipoNull = null;
document.write("Valor de variable tipo Null: "+tipoNull+"</br>");
document.write("</br>");

//No definido

var tipoIndefinido;
document.write("Valor variable Indefinida: "+tipoIndefinido+"</br>");
document.write("</br>");

//Conocer el tipo de dato

var resultado = (typeof num1 =="number");
document.write("¿Es numero? "+resultado);
document.write("</br>");

var resultado = (typeof cadena =="string");
document.write("¿Es cadena? "+resultado);
document.write("</br>");

var resultado = (typeof bandera =="boolean");
document.write("¿Es de tipo booleano? "+resultado);
document.write("</br>");