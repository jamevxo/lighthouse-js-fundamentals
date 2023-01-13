/* input name, year of birth and current year, will output age by 12/31
e.g.
ageCalculator("Suzie", 1983, 2015)
returns "Suzie is 32 years old."
*/

function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  return name + ' is ' + age + ' years old.'
}



function howManyHundreds(num) {
  function roundDown(num) {
    return Math.floor(num / 100) * 100;
    return num/100
  }
}
howManyHundreds(100)


function howManyHundreds(num) {
  return Math.floor(num/100)
}


function calculateRectangleArea(length, width) {
  if (length <= 0 || width <= 0) {
    return undefined
  }
  else {
    return length * width
  }
  
}

function calculateTriangleArea(base, height) {
  if (base <= 0 || height <= 0) {
    return undefined
  }
  else {
    return (base * height) / 2
  }
}

function calculateCircleArea(radius) {
  if (radius <= 0) {
    return undefined
  } else {
  return Math.PI * (radius * radius)
  }
}