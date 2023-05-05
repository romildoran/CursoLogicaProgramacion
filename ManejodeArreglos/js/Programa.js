function arreglos(){
    var lengua=null;
    
    //definir arreglo
    var lenguas = new Array();
    var lenguas = ["Chino Mandarin","Español","Inglés","Hindi",    "Árabe",    "Bengalí",    "Portugués",    "Ruso",    "Japonés",    "Coreano",    "Alemán",    "Francés",    "Italiano",    "Neerlandés",    "Sueco",    "Noruego",    "Danés",    "Polaco",    "Checo",    "Húngaro",    "Turco",    "Griego",    "Hebreo",    "Tailandés",    "Vietnamita",    "Finlandés",    "Estonio",    "Letón",    "Lituano",    "Eslovaco",    "Esloveno",    "Croata",    "Serbio",    "Rumano",    "Búlgaro",    "Macedonio",    "Albanés",    "Islandés",    "Gaélico escocés",    "Galés",    "Irlandés",    "Maorí",    "Samoano",    "Tahitiano"];

    
    //codigo para poder leer el arreglo
    for(i=0; i<lenguas.length; i++){
        //Accedemos a cada elemento
        lengua=lenguas[i];
        //Imprimir cada elemento del arreglo
        imprimir(lengua);        
    }
}
function imprimir(valor){
    document.getElementById("resultado").innerHTML+=valor+", ";
}
function limpiar(){
    document.getElementById("resultado").innerHTML=" ";
}
    