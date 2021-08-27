// const { reject } = require("async");
//this particular line above gave error while I was live this feels ..., else the code was good
const startTime = Date.now();
const timeSpent = () => "       |   Time: " + String(Date.now() - startTime);

const boil = (base) => {
  return new Promise((resolve, reject) => {
    console.log("boil ", base, timeSpent());
    setTimeout(() => {
      console.log(base + " is complete", timeSpent());
      reject("error at " + base);
    }, 8000);
  });
};
// resolve;
// reject;
// return;

const add_ingredients = (base) => {
  console.log("add ingredients to ", base, timeSpent());
};

boil("water")
  .then((base) => {
    add_ingredients(base);
  })
  .catch((e) => {
    console.log(e);
  });

boil("milk");
