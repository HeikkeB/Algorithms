arrayGenerate = Array.from(Array(100).keys())

const index = 3

function binarySearch (array, n) {
    let counter = 0;
    let start = 0
    let end = array.length
    while(start < end) {
        const middle = Math.floor((start + end) / 2);
        const value = array[middle]
        if(n == value) {
            return counter
        }
        if(n < value) {
            end = middle
            counter++            
        } else {
            start = middle + 1
            counter++
        }
        
    } 
    return -1
}

console.log(`iterations: ${binarySearch(arrayGenerate, index)}`)