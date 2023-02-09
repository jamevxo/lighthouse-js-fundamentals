function concat(a,b) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    c.push(a[i]);
  } for (let j = 0; j < b.length; j++) {
    c.push(b[j]);
  }
  return c;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);