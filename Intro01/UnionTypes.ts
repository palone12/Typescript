// Union Types in Typescript

// We use union whwn we are not sure of what data type we will recive

let score: number | string = 33;

score = 44;
score = "eeef";

// score = false  will give an error

function getUnique(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id;
}

console.log(getUnique(3));

// Arrays

const data: number[] = [1, 2, 3, 4, 5];

const data2: string[] = ["1", "2"];

const data3: (string | number)[] = ["1", 2];

let seatAllotment: "asile" | "middle" | "window";

seatAllotment = "asile";
