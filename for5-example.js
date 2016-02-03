function Foo() {
  this.counter = 0;
}

Foo.prototype.bumpCounter = function () {
  this.counter++;
}

function other() {
  var foo = new Foo();
  var acc = [];

  // Here we use our new construct:
  for five as outerCounter {
    // And this is a nested use:
    for five {
      acc.push(outerCounter);
      foo.bumpCounter();
    }
  }

  console.log(acc);
  return foo.counter;
}

console.log(other());
