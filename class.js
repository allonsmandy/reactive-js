class Dep {
  // stands for dependency
  constructor() {
    this.subscribers = []; // the targets that are dependent, and should be run when notify() is called
  }

  depend() {
    // this replaces our record function (index.js)
    if (target && !this.subscribers.includes(target)) {
      // only if there is a target & it's not alread subscribed
      this.subscribers.push(target);
    }
  }

  notify() {
    // replaces our replay function (index.js)
    this.subscribers.forEach((sub) => sub()); // run our targets, or observers
  }
}

// --------------------------------------------------------------------

const dep = new Dep();

let price = 5;
let quantity = 2;
let total = 0;

let target = () => {
  total = price * quantity;
};

dep.depend(); // add this target to our subscribers
target(); // run it to get the total

console.log(total); // => 10 .. The right number
price = 20;
console.log(total); // => 10 .. No longer the right number
dep.notify(); // Run the subscribers
console.log(total); // => 40  .. Now the right number
