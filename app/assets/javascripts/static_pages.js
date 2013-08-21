$(document).ready(function(){
  var peg1 = $('#peg1')
  var peg2 = $('#peg2')
  var peg3 = $('#peg3')
  var discnum = prompt("How many discs?")
  var counter = 0

  function setup(){
    if (counter < discnum){
      counter++
      peg1.append('<li class="disc" id='+counter+'>'+counter+'</li>');
      setup()
    }
  }
  setup()

  $(function movedisc() {
      $( ".peg li:first-child" ).draggable();
      $( ".peg" ).droppable({
        drop: function( event, ui ) {
          var currentdisc = $('.ui-draggable-dragging')
          if ($(this).find("li:first-child").length === 0 || $(this).find("li:first-child").attr('id')  > currentdisc.attr('id')){
            $(this).prepend(currentdisc.removeAttr('style'))
            $(this).children().draggable('destroy');
            $( ".peg li:first-child" ).draggable();
          } else {
            alert("you can't move there!")
            currentdisc.removeAttr('style')
            movedisc()
          }
        }
      });
    });
});