const generateArray = (length, max) => {
    return [...new Array(length)].map(() => Math.round(Math.random() * max))
}

const randomArray = generateArray(30, 99)

function minMaxSearch(array) {
    let min = array[0]
    let max = array[0]
    
    for(let i = 0; i < array.length; i++) {
        const num = array[i]
        if(num < min) {
            min = num
        }
        if(num > max) {
            max = num
        }
    }
    let result = `min number: ${min}, max number: ${max}`
    return result
}
console.table(randomArray)
console.log(minMaxSearch(randomArray))
