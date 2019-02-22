class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
    ) {
      // this.fullName = firstName + " " + middleInitial + " " + lastName;
      this.fullName = [firstName, middleInitial, lastName].join(" ");
  }

  foo() {
    return 'foo';
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeterWithClass(person : Person) {
  return "Hello, " +
    person.firstName + " " +
    person.lastName;
}

let user3 = new Student("Jane", "M.", "User");

console.log(user3.fullName);

console.log(greeterWithClass(user3));
