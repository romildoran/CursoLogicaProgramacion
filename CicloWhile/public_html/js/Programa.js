function generarnumerospares(){
    var limite=100;
    var dato =0;
    while (dato<limite){
        if(dato%2==0){
            document.getElementById("resultado").innerHTML+=dato+" ";
        }
        dato++;
    }
}
function limpiar(){
    document.getElementById("resultado").innerHTML="";
}
    