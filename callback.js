const startTime = Date.now();
const timeSpent = () => "       |   Time: " + String(Date.now() - startTime);

const boil = (base, callback) => {
  console.log("boil ", base, timeSpent());
  setTimeout(() => {
    console.log(base + " is complete", timeSpent());
    callback(base);
  }, 5000);
};

const add_ingredients = (base) => {
  console.log("add ingredients to ", base, timeSpent());
};

boil("water", add_ingredients);

boil("milk", () => {});
