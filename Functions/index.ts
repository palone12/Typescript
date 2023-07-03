function addTwo(num: number) {
  return num + 2;
}

addTwo(3);

function getUpper(value: string) {
  return value.toUpperCase();
}

console.log(getUpper("Raja babu"));

// More than one paramenteri n function

function signUp(name: string, id: number, isloggedIn: boolean = false) {
  console.log(`Name : ${name}, Id:${id}, IsLoggedIn:${isloggedIn}`);
}

signUp("Pranay", 33, true);
signUp("Pranay", 33);
