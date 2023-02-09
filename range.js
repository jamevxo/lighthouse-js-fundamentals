function range(start, end, step) {
  const RANGER = [];
  for (let i = start; i <= end; i += step) {
    RANGER.push(i);
    
    
  }
  return RANGER
}
console.log(range(0, 10, 2));
