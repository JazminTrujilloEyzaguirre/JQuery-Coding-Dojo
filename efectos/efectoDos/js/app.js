$(document).ready(function () {  //efectos

    var resultado = $('#resultado');

    $('.btn-primary').click(function(){
        resultado.fadeOut(3000);
    });

    $('.btn-danger').click(function(){
        resultado.fadeIn(3000);
    });

    $('.btn-warning').click(function(){
        resultado.fadeToggle(1000);
    });


});