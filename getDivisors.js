function getDivisorsCnt(n){
  
  let counts = 0;
  let limit = Math.sqrt(n);//Find the limit by getting the squareroot of n
  for(let i = 1 ; i <= limit ; i++){
    //Divisible numbers are always in a pair
    //The pair except for the squareroot are counted as +2 while the squareroots are counted as +1
    if(n % i === 0){
      if(i*i === n){
        counts++;
      }else{
        counts += 2;
      }
      
    }

}
  return counts;
}