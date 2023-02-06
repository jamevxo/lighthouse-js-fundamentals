//uses input of (age) to determine which school should be attended



function whichSchool(age) {
  if (age < 13) {
    return 'Elementary School';
  } else if (13 >= age || age <= 18) {
    return 'Secondary School';
  } else  {
    return 'Lighthouse Labs';
  }
}
console.log(whichSchool(19))


