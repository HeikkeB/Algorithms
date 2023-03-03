const arrayRandom = [4, 2, 3, 7, 8, 6, 9, 1, 5, 11, 10];

function bubbleSort(array) {
    let swapped = true;
    
    while(swapped === true) {
        swapped = false;
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i + 1]) {
                const tmp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tmp;
                swapped = true;
            }
        }
    }
    return array
}

console.log(arrayRandom)
console.log(bubbleSort(arrayRandom))