function squareDigits(num){
 let result = "";
  let elements = num.toString().split('');
    for(let item of elements){
        let square = item*item;
         result+= square;
    }
  return Number(result);
}



function squareDigits(num){
    return Number(num.toString().split('').map(item=>item*item).join(''));
}

console.log(squareDigits(123));