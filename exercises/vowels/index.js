// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var count = 0
    var vowels = ['a', 'e', 'i', 'o', 'u']
    var str = str.toLowerCase()

    for(var i = 0 ; i < str.length ; i ++) {
            if(vowels.includes(str[i])) {
                count ++
            
        }
    }
    return count
}

// console.log(vowels('AEIOU'))

module.exports = vowels;
