let data = { price: 5, quantity: 2 };

Object.keys(data).forEach((key) => {
  let internalValue = data[key]; // our initial value

  Object.defineProperties(data, key, {
    // for just the property
    get() {
      // create a get method
      console.log(`Getting ${key}: ${internalValue} `);
      return internalValue;
    },

    set(newValue) {
      console.log(`Setting ${key} to: ${newValue}`);
      internalValue = newValue;
    },
  });
});

total = data.price * data.quantity; // this calls get()
data.price = 20; // this calls set()
