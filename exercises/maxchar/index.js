// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    var char = {}
    var max = 0
    var maxChar = ''
    for (var i = 0 ; i < str.length ; i ++) {
        if(!char[str[i]]) {
            char[str[i]] = 1
        } else {
            char[str[i]] ++
        }
    }

    for (let key in char) {
        if(char[key] > max) {
            max = char[key]
            maxChar = key
        }
    }

    // Sol 2
    // arrVal = Object.values(char)
    // arrKeys = Object.keys(char)

    // for (var i = 0 ; i < arrVal.length ; i++) {
    //     if(arrVal[i] > max) {
    //         max = arrVal[i]
    //         maxChar = arrKeys[i]
    //     }
    // }


    // Sol 3
    // var max = Math.max(...Object.values(char))
    // return Object.keys(char).filter(el => {
    //     return char[el] == max
    // })[0]

    return maxChar

   
}
// console.log(maxChar('Hello there'))


module.exports = maxChar;
