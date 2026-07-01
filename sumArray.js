function sumArray(array){
    if(!array || array.length <= 1) return 0;
    let highest = Math.max(...array);
    let lowest = Math.min(...array);
    let sum = 0;
    for(let item of array){
        sum += item;
    }

    return sum - (highest+lowest);
}

console.log(sumArray([1,2,3,4,5]))