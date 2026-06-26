function twoSum(numbers, target){
    let seenNumbers = {};
    for(let i = 0; i < numbers.length; i++){
        let currentNum = numbers[i];
        let neededNum = target - currentNum;
        if(seenNumbers[neededNum] !== undefined){
            return [seenNumbers[neededNum], i]
        }

        seenNumbers[currentNum] = i
    }
}

console.log(twoSum([1,2,4,6,3], 10))