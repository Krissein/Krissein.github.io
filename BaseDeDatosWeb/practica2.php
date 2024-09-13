<?php
    //obtener informacion
    $nombre = $_POST["nombre"];
    $fecha = $_POST["fecha"];
    $num_control = $_POST["num_control"];

    $materias = $_POST["materias"];
    $calificaciones = $_POST["calificaciones"];
    $maestros = $_POST["maestros"];

    $promedio = 0;
    $suma = 0;
    //ciclo para obtener sumatoria y promedio
    for($i=0; $i<count($calificaciones); $i++){
        $suma = $suma + $calificaciones[$i];
    }

    //obtener promedio
    $promedio = $suma / count($materias);

    //Imprimir el detalle de la boleta
    echo "<h1>Alumno:".$nombre."</h1>";
    echo "<h2>NC:".$num_control."</h2>";
    echo "<h2>Fecha:".$fecha."</h2>";

    //ciclo para imprimir las calificaciones de la boleta
    for($i=0; $i<count($calificaciones); $i++){
        //condicion para poner en rojo materias reprobadas
        if($calificaciones[$i]<=5){
            echo "<h4 style='color:red;'>Materia:".$materias[$i]." : ----- Calificación: ".$calificaciones[$i]."</h4>";
        } else {
            echo "<h4>Materia:".$materias[$i]." : ----- Calificación: ".$calificaciones[$i]."</h4>";
        }
        
    }

    //Imprimir promedio, si es menor a 5 se pone rojo sino es verde
    if($promedio <= 5){
        echo "<h2 style='color:red'>Promedio = ".number_format($promedio, 2)."</h2>";
    } else {
        echo "<h2 style='color:green'>Promedio = ".number_format($promedio, 2)."</h2>";
    }
    

?>