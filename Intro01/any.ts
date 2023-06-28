// Any - Allows us to return any vslur that we are not sure about

const returnSomething = () => {
  return "Hello";
};

let hero: any;

hero = returnSomething();
console.log(hero);
