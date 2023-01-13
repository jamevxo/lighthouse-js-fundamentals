//loop that prints out all the numbers from 100 to 200, inclusive. Only move on to the next step when that works.

for (let i = 100; i < 201; i++) {
  if (i % 3 === 0 && i % 4 === 0) {
    console.log('LoopyLighthouse')  ;
  } else if (i % 3 === 0 && i % 4 != 0) {
    console.log('Loopy') ;
  } else if (i % 3 != 0 && i % 4 === 0) {
    console.log('Lighthouse') ;
  }
  else {
    console.log(i)
  }
}