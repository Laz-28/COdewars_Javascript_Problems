function stray(numbers){
    let counts = {};

    for(let item of numbers){
        if(counts[item]){
           counts[item]++; 
        }else{
            counts[item] = 1;
        }
            
    }

    for(let num in counts){
        if(counts[num] === 1){
            return Number(num);
        }

    }
}



function stray(number){
    if(number[0] != number[1]){
        return number[0];
    }else{
        return number[number.length -1]
    }
}

console.log(stray([1,1,1,3]));