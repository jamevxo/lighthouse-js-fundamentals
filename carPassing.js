const carPassing = function (cars, speed) {
  // Your code in here ...
  let car = {
    time: Date.now(),
    speed: speed
  };
  cars.push(car);
  return cars
};
