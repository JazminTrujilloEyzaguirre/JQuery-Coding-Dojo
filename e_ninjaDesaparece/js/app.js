$(document).ready(function () {  

    var resultado = $('img');

    $('.img1').click(function(){
        $('#img1').fadeOut();
    });
    $('.img2').click(function(){
        $('#img2').fadeOut();
    });
    $('.img3').click(function(){
        $('#img3').fadeOut();
    });
    $('.img4').click(function(){
        $('#img4').fadeOut();;
    });
    $('.img5').click(function(){
        $('#img5').fadeOut();
    });
    $('.img6').click(function(){
        $('#img6').fadeOut();
    });
    $('.img7').click(function(){
        $('#img7').fadeOut();
    });
    $('.img8').click(function(){
        $('#img8').fadeOut();;
    });


    $('.btn-warning').click(function(){
        resultado.fadeIn(1000);
    });


});