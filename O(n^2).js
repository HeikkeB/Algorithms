const generateArray = (length, max) => {
    return [...new Array(length)].map(() => Math.round(Math.random() * max))
}

const arr1 = generateArray(50, 99);
const arr2 = generateArray(50, 99);

function combination(array1, array2) {
    const result = [];

    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            result.push(array1[i], array2[j])
        }
    }
    return result
}

console.log(arr1)
console.log(arr2)
console.log(combination(arr1, arr2))