function adda(n1: number, n2: number, showResult: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
  //   throw new Error('Incorrect input')
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  }
  return result;
}

let number1 = 5;
const number2 = 2.8;
const printResults = true;
const resultPhrase = "Result is:";

adda(number1, number2, printResults, resultPhrase);
