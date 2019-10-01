$( "document" ).ready(function() {
$('#button').click(function(){
    var word = $('.input').val();
    $(".output").text(word);
});
});