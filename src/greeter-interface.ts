interface Person {
  firstName: string;
  lastName: string;
}

function greeterWithInterface(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user2 = { firstName: "Jane", lastName: "User" };
// let user2 = "Jane";
// let user2 = 1004;

console.log(greeterWithInterface(user2));
