$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var sentence = $("#input").val();
    // var vowels = ["a", "e", "i", "o", "u", "y"];
    // var sentence = "Hello World";
    var newWord = "dog".slice(0,2);

      // debugger;
        // this checks if the first letter is a vowel
        for(var i=0; i<newWord.length; i++){
          vowelCheck(newWord[i]);
        }

        function vowelCheck(toCheck){
          if(toCheck[0] === "a" || toCheck[0] === "e" || toCheck[0]=== "i" || toCheck[0]=== "o" || toCheck[0] === "u" || toCheck[0] === "y") {
            alert("got it");
        } else {
          alert("consonant");
        }
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
