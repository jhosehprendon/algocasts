// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

    var arrTotal = []
    var index = 0

    while(index < array.length) {
        arrTotal.push(array.slice(index, index + size))
        index += size
    }
    return arrTotal

    // var arrNew = []
    // var arrTotal = []
    // var count = 1

    // for(var i = 0 ; i<array.length ; i++) {
    //     if(count < size) {
    //         arrNew.push(array[i])
    //         if(i == array.length -1) {
    //             arrTotal.push(arrNew)
    //         }
    //         count ++
    //     } else {
    //         arrNew.push(array[i])
    //         arrTotal.push(arrNew)
    //         arrNew = []
    //         count = 1
    //     } 
    // }
    // return arrTotal

}

// console.log(chunk([1,2,3], 2))

module.exports = chunk;
