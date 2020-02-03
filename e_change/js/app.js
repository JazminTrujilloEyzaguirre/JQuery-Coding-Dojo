$(document).ready(function () {  

    $('.0cat').click(function(){
        $('#0cat').attr("src","img/ninja0.png");
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    });
    $('.1cat').click(function(){
        $('#1cat').attr("src", "img/ninja1.png");
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    });
    $('.2cat').click(function(){
        $('#2cat').attr("src", "img/ninja2.png");
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    });
    $('.3cat').click(function(){
        $('#3cat').attr("src", "img/ninja3.png");
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    });
    $('.4cat').click(function(){
        $('#4cat').attr("src", "img/ninja4.png");
        console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    });
    

});