function persistence(num){
    let steps = 0;
    while(num >= 10){
        multiply = 1;
        while(num > 0){
            multiply *= num % 10;
            num = Math.floor(num/10);
        }

        num = multiply;
        steps ++;

    }
    return steps;
}

console.log(persistence(128))

//Solution 2

function persistence(num) {
   
  let newNum = num.toString();
    let steps = 0;
 

    while(newNum.length > 1){
        let multiply = 1;
  for(item of newNum){
     multiply *= Number(item);
  }
  
  newNum = multiply.toString();
        steps++;
    }

    return `The number is ${Number(newNum)} and the steps are ${steps}`;
}

persistence(234);