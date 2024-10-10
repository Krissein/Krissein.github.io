$(document).ready(function(){
    //funcion click del boton dar carta
    $("#dar_carta").click(function(){
        var b = true;
        var cont = 0;
        while(b){
            var b = true;
            var num = Math.floor(Math.random()*54) + 1;
            console.log("numero de cartas= "+num);
            if(cartas [b-1] == true){
                continue;
             } else{
                $("#carta_activa").html("<img src='Imagenes_Loteria/"+num".jpg'>");
                cartas[num-1] = true;
                b=false;
                cont++;
            }
        
            if(cont == 54){
                console.log("ya se dieron todas las cartas");
                b=false;
             }
        }
    });
});