document.write("Programa para el manejo de Operadores: </br>");

//El operador = se utiliza para asignar
var x=5;
var y;
y=6;
document.write("Valor x: "+x+"</br>");
document.write("Valor y: "+y+"</br>");
document.write("</br>");

//El operador + se utiliza para sumar

var z=x+y;
document.write("Valor z: "+z+"</br>");
document.write("</br>");

//El operador ++ se utiliza para aumnetar en 1

x++;
document.write("Valor x: "+x+"</br>");
document.write("</br>");

//El operador de decremento -- se utiliza para disminuir en 1

y--;
document.write("Valor y: "+y+"</br>");
document.write("</br>");

//El operador += 
//x=x+y
x+=y;
document.write("Valor x: "+x+"</br>");
document.write("</br>");

/*
*El operador de concatenacion +,
* funciona como concatenador si alguno de los operando funciona como caden
*/

var text1 = "Global";
var text2 = "Mentoring";
document.write("Valor de la concatenacion: "+text1+" "+text2+" "+x);
document.write("</br>");

