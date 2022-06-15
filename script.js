function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(x, operator, y) {
  x = Number(x);
  y = Number(y);
  if (operator === '+') {
    return add(x,y)
  } else if (operator === '-') {
    return subtract(x,y)
  } else if (operator === 'x') {
    return multiply(x,y)
  } else if (operator === '÷') {
    return divide(x,y)
  }
}

let firstOperand = "";
let secondOperand = "";
let operator = "";
let display = ""

const numbers = document.getElementsByClassName("number");
for (const button of numbers) {
  button.addEventListener("click", function() {
    if (operator === "") {
      firstOperand += button.innerHTML
      display = firstOperand
      console.log(display)
    } else if (operator != "") {
      secondOperand += button.innerHTML
      display = `${firstOperand} ${operator} ${secondOperand}`
      console.log(display)
    }
  })
}

const operators = document.getElementsByClassName("operator");
for (const button of operators) {
  button.addEventListener("click", function() {
    operator = button.innerHTML;
    display = `${firstOperand} ${operator}`
    console.log(display)
  })
}

const equals = document.querySelector(".equals");
equals.addEventListener("click", function() {
  result = operate(firstOperand, operator, secondOperand);
  firstOperand = result;
  secondOperand = "";
  console.log(result);
})

const posToNeg = document.querySelector(".positiveToNegative");
posToNeg.addEventListener("click", function() {
  -Math.abs(firstOperand);
  if (display.includes("+" || "-" || "x" || "÷")) {
    -Math.abs(secondOperand);
  }
  console.log(display);
})

