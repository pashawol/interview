function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log('Outer Variable: ' + outerVariable);
    console.log('Inner Variable: ' + innerVariable);
  };
}

const newFunction = outerFunction;
newFunction('inside')('outside');

const regex = /(\d{4})-(\d{2})-(\d{2})/;
const result = regex.exec('2023-10-05');
console.log(result); // ["2023-10-05", "2023", "10", "05", index: 0, input: "2023-10-05", groups: undefined]
