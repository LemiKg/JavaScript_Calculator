import "./styles.css";

var calcButtonNumbers = document.getElementsByClassName("calc-btn-number"),
  calcButtonOperators = document.getElementsByClassName("calc-btn-operator"),
  input = document.getElementById("input"),
  clear = document.getElementById("clear"),
  backspace = document.getElementById("backspace"),
  equal = document.getElementById("equal"),
  firstValueOutput = document.getElementById("first-value"),
  firstValue,
  secondValue,
  operation,
  result;

for (let btn of calcButtonNumbers) {
  btn.addEventListener("click", function() {
    input.value += this.value;
  });
}

for (let btn of calcButtonOperators) {
  if (input.value === "") {
    btn.addEventListener("click", function() {
      firstValue = input.value;
      operation = this.value;
      input.value = "";
      firstValueOutput.innerHTML = firstValue.toString();
    });
  }
}

equal.addEventListener("click", function() {
  secondValue = input.value;

  if (operation === "+") {
    result = parseInt(firstValue) + parseInt(secondValue);
  }

  if (operation === "-") {
    result = firstValue - secondValue;
  }

  if (operation === "*") {
    result = firstValue * secondValue;
  }

  if (operation === "/") {
    result = firstValue / secondValue;
  }

  input.value = "";
  firstValueOutput.innerHTML = result.toString();
});

backspace.addEventListener("click", function() {
  let number = input.value;
  let len = number.length - 1;
  let newNumber = number.substring(0, len);
  input.value = newNumber;
});

clear.addEventListener("click", function() {
  input.value = "";
  let cleared = "";
  firstValueOutput.innerHTML = cleared.toString();
});
