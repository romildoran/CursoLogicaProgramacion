function determinardiasegunfecha(entrada){
    var fechatexto=null;
    //convertimos la entrada a un objeto de tipo fecha
    var fecha=new Date(entrada.value);
    
    var dia=fecha.getDay();
    
    switch(dia){
        case 0:
            fechatexto="el dia es lunes";
            break;
        case 1:
            fechatexto="el dia es marte"; 
            break;
        case 3:
            fechatexto="el dia es miercoles";
            break;
        case 4:
            fechatexto="el dia es jueves";
            break;
        case 5:
            fechatexto="el dia es viernes";
            break;
        case 6:
            fechatexto="el dia es sabado";
            break;
        case 7:
            fechatexto="el dia es domigno";
            break;
        case 8:
            fechatexto="Valor erroneo de fecha";
            break;
    }
    document.getElementById("resultado").innerHTML=fechatexto;
}