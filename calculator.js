const operator = prompt("Enter sign: +,-,/,*");
const num1 = parseFloat(prompt("Enter a number 1"));
const num2 = parseFloat(prompt("Enter a number 2"));
let result;
if (operator=="+"){result = num1 + num2;}
else if (operator=="-"){result = num1 - num2;}
else if (operator=="/"){result = num1 / num2;}
else if (operator=="-"){result = num1 - num2;}
else if (operator=="*"){result = num1 * num2;}
alert(result);