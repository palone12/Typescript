function addTwo(num: number) {
  return num + 2;
}

console.log(addTwo(5));

function getUpper(val: string) {
  return val.toUpperCase();
}

console.log(getUpper("pranay"));

function userDetails(name: string, email: string, password: boolean) {
  console.log(name, email, password);
}

userDetails("Nama", "nama@gmail.com", false);

// Defining return value
function Name(nam: string): string {
  return nam + "alone";
}

console.log(Name("raju"));
