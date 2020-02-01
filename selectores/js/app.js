$(document).ready(function () {  //selectores.
    //.............................seleccionar etiquetas html a traves de:
    $('h1').html('etiqueta h1');  //nombre de la etiqueta
    $('.display-4').html('desde clase');  //clase
    $('#idh1').html('desde id');   //desde id
    

    //seleccionar con query selector : innerHTML para el contenido de la etiqueta.
    document.querySelector('h1').innerHTML = "Con nombre etiqueta";
    document.querySelector('.display-4').innerHTML = "Con clase";
    document.querySelector('#idh1').innerHTML = "Con id";

    $('.container h1').html('cambio de texto con funcion html');
    $('.container h1:first').html('cambio de texto con funcion html'); //..cambio del primer h1 dentro de la clase container.
    $('.container h1:last').html('cambio de texto con funcion html'); //..cambio del primer h1 dentro de la clase container.
    

    //.............................se muestra la ultima instruccion del código;
});