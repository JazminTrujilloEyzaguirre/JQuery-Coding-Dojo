$(document).ready(function(){
    var counter = 1;
    $('.btn-boton').click(function(){
        counter += 1;
        $('.img-change').prepend($('<img/>', {src:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + counter + '.png'}))
    });
});