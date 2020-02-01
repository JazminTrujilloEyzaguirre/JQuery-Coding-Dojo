$(document).ready(function () {  //efectos

    var resultado = $('#resultado');

    $('.btn-primary').click(function(){
        resultado.hide(1000);
    });

    $('.btn-danger').click(function(){
        resultado.show(1000);
    });

    $('.btn-warning').click(function(){
        resultado.toggle(1000);
    });


});