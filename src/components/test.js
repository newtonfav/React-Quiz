// const calculate = function (expression) {
//   const operators = ["+", "-", "*", "/"];

//   expression = expression.trim().replace(/\s+/g, "");

//   const numbers = expression
//     .split("")
//     .filter((char) => !isNaN(char))
//     .map((element) => Number(element));

//   const newExpression = expression.split("");
//   //  .map((el, index) => el in operators);

//   return newExpression;

//   //   return operations["+"](numbers[0], numbers[1]);
// };

const calculate = function (str) {
  const operators = ["+", "-", "*", "/"];

  const newArr = str.trim().replace(/\s+/g, "").split("");

  for (let i = 0; i <= newArr.length - 1; i++) {
    if (operators.includes(newArr[i])) {
      // newArr[i + 1] = Number(newArr[i + 1]);
      [newArr[i], newArr[i + 1]] = [newArr[i + 1], newArr[i]];
      i++;
    } else {
      newArr[i] = Number(newArr[i]);
    }
  }

  console.log(newArr);

  let result = newArr.reduce((acc, cur, index, arr) => {
    debugger;

    if (typeof cur !== "number") {
      return acc;
    }

    if (index === 0 || arr[index - 1] === "+") {
      return acc + cur;
    } else if (arr[index - 1] === "-") {
      return acc - cur;
    } else if (arr[index - 1] === "*") {
      return acc * cur;
    } else if (arr[index - 1] === "/") {
      return acc / cur;
    } else {
      return cur;
    }
  }, 0);

  return result;
};

console.log(calculate(" + 3 4"));
