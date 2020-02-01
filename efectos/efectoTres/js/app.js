$(document).ready(function () {  //efectos

    var resultado = $('#resultado');

    $('.btn-primary').click(function(){
        resultado.animate({left: '100px', 
                            opacity: '0.5',
                            height: '150px',
                            width: '150px' 
        }, 3000, function(){
            resultado.animate({left: '0px',
                                opacity: '1',
                                height: '-=150px',
                                width: '-=150px' 
                            }, 2000)
        });
    });
});