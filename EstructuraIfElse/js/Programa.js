function determinaClasificacionporEdades(entrada){
    var resultado=null;
    var edad=entrada.value;
    
    if(edad>0 && edad<12){
        resultado = "AA y A";
    }
    else if (edad>=12 && edad<15){
        resultado = "B, AA y A";
    }
    else if (edad>=15 && edad<18){
        resultado = "B15, B, AA y A";
    }
    else if (edad>=18 && edad<21){
        resultado = "C, B15, B, AA y A";
    }
    else if (edad>=21 && edad<=122){
        resultado = "Puede ver cualquier tipo de peliculas";
    }
    else if (edad>122){
        resultado = "No creo que exista alguna persona con tanto años! !";
    }
    else{
        resultado = "Valor erroneo";
    }
    document.getElementById("resultado").innerHTML=resultado;
}