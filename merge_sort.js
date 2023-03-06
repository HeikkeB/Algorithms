arrRandom = [6,5,3,1,8,7,2,4];

function mergeSort(array) {
    const mid = array.length / 2
    if(array.length < 2){
      return array 
    }   
    const left = array.splice(0, mid)
    return merge(mergeSort(left),mergeSort(array))
  }

function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ]
}

console.log(mergeSort(arrRandom))