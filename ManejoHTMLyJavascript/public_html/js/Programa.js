function mostrarNombre(parametro){
    var nombre=parametro.value;
    var saludo="hola "+nombre.toUpperCase();
    
    document.getElementById("resultado").innerHTML=saludo;
}