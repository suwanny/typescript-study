// var
function foo() {
  console.log(x);
  var x = 15;
}

// let
function foo() {
  console.log(x);
  let x = 15;
}

// let
let x = 15;
if (x > 10) {
  let y = 21;
}
console.log(x + y);


// const
function foo() {
  console.log(x);
  const x = 15;
}
