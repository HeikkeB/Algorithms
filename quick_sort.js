const arrRandom = [6,5,3,1,8,7,2,4,9]

function quickSort(arr, start = 0, end = arr.length - 1) {

    if(end > start) {
        const pivotIndex = partition(arr, start, end)
    
        quickSort(arr, start, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, end)
    
        return arr
    }
    return arr
}

function partition(arr, start = 0, end = arr.length - 1) {
    
    const pivotValue = arr[end]
    let pivotIndex = start

        for(let i = start; i < end; i++) {
            if(arr[i] < pivotValue) {
                swap(arr, i, pivotIndex)
                pivotIndex++
            }
        }

        swap(arr, pivotIndex, end)

        return pivotIndex
    }

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}


console.log(partition(arrRandom))
console.table(quickSort(arrRandom))

//real quick sort)
//console.table(arrRandom.sort())