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

  for (let i = 0; i < n; i++) {
    let stair = '';

    for (let j = 0; j < n; j++) {
      if (j <= i) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }

    // for(var i = 1 ; i<=n ; i++) {
    //     var space = ' '
    //     if(i < n) {
    //         for(var j = n ; j>i+1 ; j--) {
    //             var space = space + ' '
    //         }
    //     } else {
    //         space = ''
    //     }
        
    //     var step = ''
    //     for(var j = 1 ; j<=i; j++) {
    //         var step = step + '#'
    //     }
    //     console.log(step + space)
    // }
}

// steps(4)

module.exports = steps;
