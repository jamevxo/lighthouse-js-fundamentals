//not sure how to implement the function to solve for multiple blank spaces
//assuming it'll only ever be one white space, ever
/*
const urlEncode = function(text) {
  // Put your solution here
  let newText = '';
  for (let i = 0; i < text.length; i++) {
     (text[i] === ' ') {
      newText += '%20';
    } 
    else newText += text[i]
  } return newText
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

*/

const urlEncode = function(text) {
  // Put your solution here
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    if (text[0] === ' ' || text[text.length-1] === ' ') {
      newText += text[i];
    }
    else if (text[i] === ' ') {
      newText += '%20';
    } 
    else newText += text[i]
  } return newText
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
