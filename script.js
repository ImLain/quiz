const result = document.querySelector("#comments");

function calculate(){
  var numberOfQuestion = 5;
  var question;
  var score = 0;
  
  for (var j=1; j<numberOfQuestion+1; j++){
    question = document.getElementsByName("q"+j);
    
    for (var i=0; i<question.length; i++){
      var test = question[i];
      if (question[i].checked){
        var value = Number(question[i].value);
        score = score + value; 
      }       
    }
  }

  result.style.margin = "15px";
  result.style.textAlign = "center";
  result.innerHTML = `<b>Le score est de ${score} sur 5</b>`;
 }


var button = document.getElementById("button");
button.addEventListener("click", calculate);
