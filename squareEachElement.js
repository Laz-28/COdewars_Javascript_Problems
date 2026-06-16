function squareDigits(num){
 let result = "";
  let elements = num.toString().split('');
    for(let item of elements){
        let square = item*item;
         result+= square;
    }
  return Number(result);
}