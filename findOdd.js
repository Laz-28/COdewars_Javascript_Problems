function findOdd(A) {
  
  let count = {};
  for(let item of A){
    if(count[item]){
      count[item]++;
    }else{
      count[item] = 1;
    }
  }
  
  for(let key in count){
    if(count[key] % 2 !== 0){
      return Number(key);
    }
  }
  
  
}

//Solution 2

function findOdd(A){
    let result = 0;
    for(let item of A){
        result ^= item;
    }

    return result;
}

console.log(findOdd([1,1,2,3,3,3]));