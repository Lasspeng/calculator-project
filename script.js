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

let display = "";

numbers = document.getElementsByClassName("number");
for (const button of numbers) {
  button.addEventListener("click", function() {
    display += button.innerHTML;
    console.log(display)
  })
}

operators = document.getElementsByClassName("operator");
for (const button of operators) {
  button.addEventListener("click", function() {
    const operator = button.innerHTML;
    display = `${display} ${operator} `;
    console.log(display)
  })
}

function split(equation) {
  if (equation.includes("+")) {
    equation.split("+")
  } else if (equation.includes("-")) {
    equation.split("-")
  } else if (equation.includes("x")) {
    equation.split("x")
  } else if (equation.includes("÷")) {
    equation.split("÷")
  } else {
    return
  }
}

equals = document.querySelector(".equals");
equals.addEventListener("click", function() {
  const array = display.split(" ");
  console.log(array);

  console.log(operate(array[0], array[1], array[2]));
  return operate(array[0], array[1], array[2])
})