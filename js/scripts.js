$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var sentence = $("#input").val();
    // var vowels = ["a", "e", "i", "o", "u", "y"];
    // var sentence = "Hello World";

      // debugger;
        // this checks if the first letter is a vowel
        if(sentence[0] === "a" || sentence[0] === "e" || sentence[0]=== "i" || sentence[0]=== "o" || sentence[0] === "u" || sentence[0] === "y") {
          alert("got it");

      }

      // // for (var i=0; i<newSentence.length; i++) {
      // // 	var word = newSentence[0];
      // //   for(var j =0; j<word.length; j++){
      //   	if sentence.includes("a","e","i","o","u","y")){
      //     	alert("YAY!");
      //      }else{
      //      	alert("Hey!");
      //      }

//   }
// }


  });
});
