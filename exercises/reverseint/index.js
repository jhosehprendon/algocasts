// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    var arr = n.toString().split('')

    if(n < 0) {
        return Number('-' + arr.slice(1).reverse().join(''))
    } else {
        return Number(arr.reverse().join(''))
    } 

}


module.exports = reverseInt;
