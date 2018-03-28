$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var sentence = $("#input").val();
    var sentenceSplit = sentence.split(" ");
    sentenceSplit.forEach(function(word){
      var twoLetters = word.slice(0,2);
      var threeLetters = word.slice(0,3);

      if (word[0] === "a" || word[0] === "e" || word[0]=== "i" || word[0]=== "o" || word[0] === "u" || word[0] === "y") {
        alert("First");
      } else if
         (word.indexOf("qu") === 0){
          var letters;
          letters = word.slice(0,1);
          word = word.substr(2) + letters + "ay";
          alert("Second");
      }else {
          var twoLetters = word.slice(0,2);
          for (var i=0; i<twoLetters.length; i++) {
  	       if	(twoLetters[i] !== "a" || twoLetters[i] !== "e" || twoLetters[i] !== "i" || twoLetters[i] !== "o" || twoLetters[i] !== "u" || twoLetters[i] !== "y"){
              word = word.substr(2) + twoLetters + "ay";
              alert("Third");
            }
          }
        }
      });
    });
  });
