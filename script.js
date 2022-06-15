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
  } else if (operator === '*') {
    return multiply(x,y)
  } else if (operator === '÷') {
    return divide(x,y)
  }
}

let firstOperand = "";
let secondOperand = "";
let operator = "";
let display = ""

function reset () {
  firstOperand = ""
  secondOperand = ""
  operator = ""
  display = ""
}

const realDisplay = document.querySelector(".display");

const numbers = document.getElementsByClassName("number");
for (const button of numbers) {
  button.addEventListener("click", function() {
    if (operator === "") {
      firstOperand += button.innerHTML
      display = firstOperand
      realDisplay.textContent = display;
      console.log(display)
    } else if (operator != "") {
      secondOperand += button.innerHTML
      display = `${firstOperand} ${operator} ${secondOperand}`
      realDisplay.textContent = display;
      console.log(display)
    }
  })
}

const operators = document.getElementsByClassName("operator");
for (const button of operators) {
  button.addEventListener("click", function() {
    operator = button.innerHTML;
    display = `${firstOperand} ${operator}`
    realDisplay.textContent = display;
    console.log(display)
  })
}

const equals = document.querySelector(".equals");
equals.addEventListener("click", function() {
  if (operator === "") {
    return 
  }
  result = operate(firstOperand, operator, secondOperand);
  realDisplay.textContent = result;
  firstOperand = result;
  secondOperand = "";
  console.log(result);
})

const posToNeg = document.querySelector(".positiveToNegative");
posToNeg.addEventListener("click", function() {
  if (operator === "") {
    firstOperand = "-" + firstOperand;
    realDisplay.textContent = display;
    console.log(display)
  } else if (operator != "") {
    secondOperand = "-" + secondOperand;
    realDisplay.textContent = display;
    console.log(display)
  }
})

const clear = document.querySelector(".clear-all");
clear.addEventListener("click", function() {
  reset();
  realDisplay.textContent = display;
})

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", function() {
  if (operator === "") {
    firstOperand += decimal.innerHTML
    realDisplay.textContent = display;
  } else if (operator != "") {
    secondOperand += decimal.innerHTML
    realDisplay.textContent = display;
  }
})
