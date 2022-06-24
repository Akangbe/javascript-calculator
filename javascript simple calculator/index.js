var number1 = parseeint(prompt("num1; "));
var opr = prompt("operation: / * +");
var num2 = parseInt(prompt("num2:"));

if (opr == "+") {
  alert(num1 + num2);
  console.log(num1 + num2);
} else if (opr == "-") {
  alert(num1 - num2);
  console.log(num1 - num2);
} else if (opr == "*") {
  alert(num1 * num2);
  console.log(num1 * num2);
}
