function checkIfNumber() {
    var input = document.getElementById("inputVariable").value;
    var resultText = document.getElementById("resultText");
    
    if (!isNaN(input) && input !== "") {
      resultText.textContent = "The input is a number.";
    } else {
      resultText.textContent = "The input is not a number.";
    }
  }