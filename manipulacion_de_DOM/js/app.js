$(document).ready(function () {  //Manipulacion del DOM
    
    $('#idh1').addClass('text-danger'); //agregar clase.
    $('#idh1').removeClass('display-4'); //eliminar clase.
    $('#contenido').append('<h1>elemento al final</h1>'); //agregar elemento al final
    $('#contenido').prepend('<h1>elemento al principio</h1>'); //agregar elemento al principio
    $('#color_azul').remove(); //eliminar elemento && no aparece en el DOM  
    $('#color_azul').hide(); //eliminar elemento && no se muestra pero existe en el DOM


    $('#color_azul').css('color', 'blue'); //cambiar stylo css (jqcssSet);
    $('#color_azul').css({color: 'green', background: 'grey'}); //variacion, mas parecido a css. + para agregar mas de una propiedad css.
    
    $('img').attr('src', 'https://ep00.epimg.net/tecnologia/imagenes/2015/06/25/actualidad/1435248518_445335_1435251285_noticia_normal.jpg');
    $('img:last').attr('width', '50');

  

    //.............................se muestra la ultima instruccion del código;
});