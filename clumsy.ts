// function clumsy(N: number): number {
//   if (N === 1) {
//     return 1;
//   } else if (N === 2) {
//     return 2;
//   } else if (N === 3) {
//     return 6;
//   } else if (N === 4) {
//     return 7;
//   }

//   if (N % 4 === 0) {
//     return N + 1;
//   } else if (N % 4 <= 2) {
//     return N + 2;
//   } else {
//     return N - 1;
//   }
// }

function clumsy(N: number): number {
  if (!N) return 0;
  enum Operator {
    Devide,
    Times,
    Sub,
    Add,
  }
  const operatorArr: Operator[] = [
    Operator.Times,
    Operator.Devide,
    Operator.Add,
    Operator.Sub,
  ];

  let arr: number[] = Array.from({ length: N }).map((item, index) => N - index);
  let result: number[] = [N];

  arr.slice(1).forEach((item, index) => {
    const operator = operatorArr[index % operatorArr.length];
    if (!result.length) return;
    switch (operator) {
      case Operator.Times: {
        const value = result.pop() || 1;
        result.push(item * value);
        break;
      }
      case Operator.Devide: {
        const value = result.pop() || 1;
        result.push(
          value < 0
            ? -Math.floor(Math.abs(value) / item)
            : Math.floor(value / item)
        );
        break;
      }
      case Operator.Add: {
        result.push(item);
        break;
      }
      case Operator.Sub: {
        result.push(-item);
        break;
      }
    }
  });

  return result.reduce((acc, cur) => acc + cur, 0);
}

export { clumsy };
