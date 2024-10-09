$(document).ready(function(){
    alert("funciona jquery");
    $('#boton').click(function(){
    var nombre = $('#nombre').val();
    alert(nombre);
    });
    $('texto').click(function(){
        $('texto').css("display", "inherit").fadeout(2000);

    });
})