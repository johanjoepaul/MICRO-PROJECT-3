var textarea = document.getElementById("textarea");
function addExpression(symbol) {
  textarea.value += symbol;

  if (symbol === "") {
    textarea.value = "";
  }
}
function deleteText(symbol) {
  if (symbol === "DEL") {
    var text = textarea.value;
    textarea.value = textarea.value.toString().slice(0, -1); 
  }
}

function calculateText() {
  try {
    textarea.value = parseFloat(eval(textarea.value).toFixed(3));
  } catch {
    textarea.value = "ERROR!!";
    setTimeout(() => (textarea.value = ""), 600); 
  }
}
