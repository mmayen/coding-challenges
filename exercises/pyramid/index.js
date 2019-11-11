// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    const columns = 2*n - 1;
    const midIndex = Math.floor(columns/2);
    // build level
    for(let row = 0; row < n; row++){
      let level = '';
      // fills hash
      for(let col = 0; col < columns; col++){
          if(col >= midIndex - row && col <= midIndex + row){
              level+= '#';
          } else{
              level+= ' ';
          } 
      }
      console.log(level);
    }
}
console.log(pyramid(4));
module.exports = pyramid;
