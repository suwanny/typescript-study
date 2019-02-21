class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        // this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.fullName = [firstName, middleInitial, lastName].join(" ");
    }
}
function greeterWithClass(person) {
    return "Hello, " +
        person.firstName + " " +
        person.lastName;
}
let user3 = new Student("Jane", "M.", "User");
console.log(greeterWithClass(user3));
//# sourceMappingURL=greeter-class.js.map