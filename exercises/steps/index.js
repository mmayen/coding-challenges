// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    // build level
    for(let row = 0; row < n; row++){
        let steps = '';
    // fills hash
      for(let col = 0; col < n; col++){
        if(col <= row){
            steps += '#';
        } else{
            steps += ' ';
        }
        console.log("step " + row);
      }
      console.log(steps);
    }
}
console.log(steps(5));
module.exports = steps;
