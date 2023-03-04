const insertionArray = [6,5,3,1,8,7,2,4,10];

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        const current = arr[i];
        let j = i;

        while(j > 0 && arr[j - 1] > current) {
            arr[j] = arr[j - 1];
            j--;
        }

        arr[j] = current;
    }

    return arr;
};

console.log(insertionSort(insertionArray))