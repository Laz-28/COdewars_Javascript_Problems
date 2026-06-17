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