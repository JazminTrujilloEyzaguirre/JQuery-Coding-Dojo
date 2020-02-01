## ¿QUÉ ES JQUERY?

Según la definición de su página oficial, jQuery es una librería de JavaScript rápida, pequeña y poderosa en funciones. Podemos manejar eventos, manipular el DOM HTML, agregar animaciones, Ajax entre otras cositas.

#### VENTAJAS DE UTILIZAR JQUERY

Para mi las principales ventajas de utilizar jQuery son:

- Compatibilidad con navegadores antiguos.
- Fácil escritura y comprensión del código.
- Es Open Source.
- Muchos Plugins
- Facilidad de utilizar AJAX

#### INSTALACIÓN DE JQUERY EN NUESTRO SITIO WEB.

Exiten dos métodos, el primero y el más fácil de todos es a través de un CDN y el segundo es descargar la libería y crear un nuevo archivo JS con todos sus códigos.

¿Por qué prefiero a través de un CDN?
Las principales ventajas son:

- Está alojado en muchos servidores en todo el mundo, por lo tanto la probabilidad de que se caiga es bajisima.
- Y la más importante es que si nuestro usuario ya visitó un sitio web con tu mismo CDN, ya lo tiene en el navegador web, por lo tanto no tendrá que descargarlo nuevamente

#### Efectos 

(funciones para hacer algunos efectos de animación geniales)

- .hide()
- .show()
- .toggle()
- .slideUp()
- .slideDown()
- .slideToggle()
- .fadeOut()
- .fadeIn()

- CSS 

  (agregar o remover una clase para cualquier elemento/DOM de HTML)

  - .addClass()
  - .removeClass()
  - .css()

- Manipulación 

  (recuperar o establecer un valor o texto en cualquier elemento de HTML)

  - .after()
  - .append()
  - .prepend()
  - .attr()
  - .before()
  - .html()
  - .text()
  - .val()

- Eventos 

  (funciones para manejar un evento)

  - .click()
  - .on()
  - .live() - deprecated (JQuery 1.7)
  - .hover()

Ten en cuenta que para la **manipulación** de funciones de jQuery, hay algunas distinciones que hacer. Las funciones **.html() y .text()** son diferentes en un sentido clave: **.html()** puede ser utilizado para insertar nuevo marcado de HTML, es decir nuevas etiquetas de HTML. **.text()** es usado para obtener o configurar el valor de **texto** de un **elemento de HTML.** Por ejemplo, podrías utilizar **.text()** para cambiar el texto de un párrafo, pero si quieres poner una lista ordenada dentro del párrafo, tienes que usar **.html()** para insertar las etiquetas apropiados dentro de párrafo. 

De manera similar, **.append()** y **.html()** hacen casi la misma cosa; ambos pueden alterar el contenido de HTML en el ítem seleccionado. La función **.append** **agregará** marcado al elemento en cuestión, mientras que **.html() sobrescribirá** el marcado con lo que sea que se esté ejecutando dentro del paréntesis. Entonces, ten presente que si quieres **agregar** contenido, utiliza **.append(),** pero su quieres **reemplazar** el contenido, usa **.html(**