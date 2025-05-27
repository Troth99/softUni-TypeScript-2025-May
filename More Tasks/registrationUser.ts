interface User {
  username: string;
  age: number;
  isAdmin: boolean;
  email?: string;
}

function registerUser(user: User): void {
  const isValidUser =
    user.username.length >= 5 && user.username.length <= 10 && user.age >= 18;

  if (isValidUser && user.isAdmin === false) {
    console.log(`User registered ${user.username} age ${user.age}`);
  } else if (isValidUser && user.isAdmin === true) {
    console.log(`User registered ${user.username} age ${user.age} [ADMIN]`);
  } else {
    console.log(`Unable to register user `);
  }
}

let user = {
  username: "Ivana",
  age: 19,
  isAdmin: true,
  email: "ivanPetrov@abv.bg",
};

let user1 = {
  username: "Pencho",
  age: 15,
  isAdmin: false,
};

let user2 = {
    username: 'Pen4ooo',
    age: 25,
    isAdmin: false
}
registerUser(user);
registerUser(user1);
registerUser(user2);
