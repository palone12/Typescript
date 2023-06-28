// const User = {
//   name: "pranay",
//   email: "alone@gmail.com",
//   isActive: true,
// };

// function createUser({ name: string, isPaid: boolean }) {}

// createUser({ name: "Aditya", isPaid: true });

// // type

// type Users = {
//   name: string;
//   email: string;
//   isActive: boolean;
// };

// function createUsers(user: Users): Users {
//   return { name: user.name, email: user.email, isActive: user.isActive };
// }

// createUsers({ name: "Pranay", email: "rsjaaa", isActive: false });

type User = {
  readonly _id: string; // Readonly does no allow change that value
  name: string;
  email: string;
  isActive: boolean;
  credCard?: number; // ? is used to keep that firld optional
};

let myUser: User = {
  _id: "1234",
  name: "Pranay Alone",
  email: "alone@gmail.com",
  isActive: true,
};

// myUser._id= '3343'; will not allow to change since it is read onlt property
myUser.email = "Rajabau@gmail.co";
console.log(myUser);
