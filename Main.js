let retry = true;
let total;

do {
   let num1 = Number(window.prompt("Enter first value"));
   const operation = Number(window.prompt("1 = addition" + "\n2 = subtraction" + "\n3 = multiplication" + "\n4 = division"));
   let num2 = Number(window.prompt("Enter second value"));

   switch (operation) {
      case 1:
         total = num1 + num2;
         window.prompt("result: " + total);
         break;
      case 2:
         total = num1 - num2;
         window.prompt("result: " + total);
         break;
      case 3:
         total = num1 * num2;
         window.prompt("result: " + total);
         break;
      case 4:
         total = num1 / num2;
         if (num2 == 0) {
            window.prompt("You cannot divide by zero!");
         } else {
            window.prompt("result: " + total);
         }
         break;
      default:
         window.prompt("invalid choice!");
   }

   let decisionToRetry = Number(window.prompt("do you want to try again?" + "\n1 = yes " + "\n2 = no"));

   if (decisionToRetry == 2) {
      retry = false;
   } else {
      retry = true;
   }
} while (retry);
