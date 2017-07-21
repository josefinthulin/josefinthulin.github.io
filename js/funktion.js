$(document).ready(function(){
  //Skrollfunktionen
  //när a trycks på, alltså ett val i menyn.
  $("a").on('click', function(event) {
    //$.attr(this, 'href')=kollar på det tryckta elementet och tar ut dess href.
    //offset kollar hur långt ner det är till det elementet som är href
    //variabeln top = avståndet till det element vi vill till
    var top = $( $.attr(this, 'href') ).offset().top;
      //skrollar ner så långt som top är.
      $('html, body').animate({
        scrollTop: top
      }, 500);

    return false;
  });
});