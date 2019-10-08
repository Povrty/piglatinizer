$( "document" ).ready(function() {
$('#button').click(function(){
    var text = $('.input').val();
    var words = text.split(" ");
    var vowels = ["a","e","i","o","u"];
    var words1 = words[0].charAt(0)
    var end1 ="";
    if (vowels.includes(words1)) {
        console.log("Correct")
        $(".output").text(words[0]+"ay")
    } else {
        console.log("Wrong")
        $(".output").text(words[0]+words1[0]+"ay")
    }
});
});