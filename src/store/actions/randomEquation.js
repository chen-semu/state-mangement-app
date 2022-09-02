export let randomEquation = (theState, payload) => {
  const randomAction = ["+", "-", "*", "/"];
  switch (randomAction[Math.floor(Math.random()*4)]) {
    case "+":
      return theState+payload;
    case "-":
      return theState-payload;
    case "*":
      return theState*payload;
    case "/":
      return theState-payload;
    default:
      break;
  }
};
