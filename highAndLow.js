function highAndLow(numbers){
  
  numbers = numbers.split(" ").map(Number);
  let largest = numbers[0]; 
  for(let i = 1; i < numbers.length ; i++){
      if(numbers[i] > largest){
        largest = numbers[i] 
      }
    
  }
 let smallest = numbers[0]; 
for(let j = 1; j < numbers.length ; j++){
if(numbers[j] < smallest){
  smallest = numbers[j]
}
  
}
  
  return `${largest} ${smallest}`

}

function highAndLow(numbers){
    numbers = numbers.split(" ");
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}
console.log(highAndLow("1 9 3 4 -5"));