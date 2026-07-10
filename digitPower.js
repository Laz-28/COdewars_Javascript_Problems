function digPow(n, p){
  
  let digit = String(n).split('');
  let totalSum = 0;
  for(let i=0; i < digit.length; i++){
    let currentDigit = Number(digit[i]);
    let currentPower = p+i;
    
    totalSum += Math.pow(currentDigit, currentPower);
  }
  if(totalSum%n === 0){
    return totalSum/n
  }
  
  return -1;
}

console.log(digPow(56,2))