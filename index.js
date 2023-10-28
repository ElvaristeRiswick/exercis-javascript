function counter() {
  let count = 1;
  return function () {
    count++;
    console.log(`${count} `);
  };
}
let counterFunction = counter();
counterFunction();
counterFunction();
counterFunction();
counterFunction();
counterFunction();
