const generateArray = (length, max) => {
    return [...new Array(length)].map(() => Math.round(Math.random() * max))
}

const arr1 = generateArray(5, 3);
const arr2 = generateArray(5, 3);

function binarySearch (array, n) {
    let start = 0
    let end = array.length
    while(start < end) {
        const middle = Math.floor((start + end) / 2);
        const value = array[middle]
        if(n == value) {
            return middle
        }
        if(n < value) {
            end = middle           
        } else {
            start = middle + 1
        }        
    } 
    return -1
}

function intersection(array1, array2) {
    const result = []

    for(let i = 0; i < array1.length; i++) {
        const found = binarySearch(array2, array1[i])
        if(found > -1) {
            result.push(array1[i])
        }
    }
    return result
}
console.log(arr1)
console.log(arr2)
console.log(intersection(arr1, arr2))