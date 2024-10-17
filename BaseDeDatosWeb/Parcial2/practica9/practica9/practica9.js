$(document).ready(function(){
    //funcion click del boton dar carta
    let cartas = new Arrays(54).fill(false);
    var cont = 0;
    $("#dar_carta").click(function(){
        var b = true;
        var cont = 0;
        while(b){
            var b = true;
            var num = Math.floor(Math.random()*54) + 1;
            console.log("numero de cartas= "+num);
            if(cartas[b-1] == true){
                continue;
             } else{
                $("#carta_activa").html("<img src='Imagenes_Loteria/"+num+".jpg'>");
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
cargarCartas();
function cargarCartas(){
    var carta1 = 0;
    var carta2 = 0;
    let asignadas = new Array(54).fill(false);
    while(carta1<16){
        var num = Math.floor(Math.random()*54)+1;
        if(asignadas[num-1]==false){
            $("#carta1").append("<di class='col-sm-3'><img class='img-fluid' src = 'Imagenes_Loteria/"+num+".jpg'></div>'");
            asignadas[num-1] = true;
            carta1++;
        }else{
            continue;
        }
     asignadas = new Array(54).fill(false);
    }while(carta2<16){
        var num = Math.floor(Math.random()*54)+1;
        if(asignadas[num-1]==false){
            $("#carta1").append("<di class='col-sm-3'><img class='img-fluid' src = 'Imagenes_Loteria/"+num+".jpg'></div>'");
            asignadas[num-1] = true;
            carta2++;
        }else{
            continue;
        }

    }
}