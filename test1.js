/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var num = 99;

while (num > 0) {
    if (num > 2) {
      console.log(num +' bottles of juice on the wall! '+ num+' bottles of juice! Take one down, pass it around... '+ (num-1) + ' bottles of juice on the wall!')
    } else if (num === 2) {
      console.log(num +' bottles of juice on the wall! '+ num+' bottles of juice! Take one down, pass it around... '+ (num-1) + ' bottle of juice on the wall!')
    } else if (num === 1) {
      console.log(num +' bottle of juice on the wall! '+ num+' bottle of juice! Take one down, pass it around... '+ (num-1) + ' bottles of juice on the wall!')
    }
    num--
  }

    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num





    /*
 * Programming Quiz: Changing the Loop (4-4)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// rewrite the while loop as a for loop
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}


for (x = 9; x >= 1; x--) {
  console.log("hello " + x);
}



/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
let solution = 12

for (let x = solution -1; x > 0; x--) {
    solution *= x 
}
console.log(solution)

/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */
 
// Write your code here

for (let x = 0; x < 26; x++) {
  for (let y = 0; y < 100; y++) {
    console.log(x+'-'+y)
  }
}



function laugh(num) {
  for (i = num; i < 1; i--) {
    if (i > 1) {
      return 'ha';
    }
    else if (i === 1) {
    return 'ha!';
  }
    else {
    return ''
    }
    
  }
}

* Programming Quiz: Laugh (5-4)
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `laugh`
* - Your code should include an anonymous function expression stored in the variable `laugh`
* - Your anonymous function expression should take one argument
* - Your anonymous function expression should return the correct number of `hahaha`\'s
*/

var sound = ''

var laugh = function(num) {
   for (let i = 0; i < num; i++) {
       sound = sound + 'ha';
   }
   sound = sound + '!'
   return sound
}

console.log(laugh(10));


-_

/*
 * Programming Quiz: Cry (5-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here
let cry = function() {
  return "boohoo!"
}


/*
 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

/*
 * Programming Quiz: Inline Functions (5-6)
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
emotions("happy", function(num) {
  var sound = ''
  for (i = 0; i < num; i++) {
    sound = sound + 'ha'
  }
  sound = sound + '!'
  return sound
});

// Argument 1 - "happy" string
// Argument 2 - an inline function expression