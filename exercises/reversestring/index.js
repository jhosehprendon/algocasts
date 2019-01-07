// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // return str.split('').reverse().join('')

    // var reversed = ''
    // for (var i = str.length - 1 ; i >= 0  ; i--) {
    //     reversed += str[i]
    // }
    // return reversed

    return str.split('').reduce((acc, el) => {
        return el + acc
    }, '')

}

module.exports = reverse;
