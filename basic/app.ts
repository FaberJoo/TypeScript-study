let userInput: unknown;
let userName: string;

userInput = 5;
userName = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}
userInput = userName;

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
}

const result = generateError("Error!!!", 500);
console.log(result);
