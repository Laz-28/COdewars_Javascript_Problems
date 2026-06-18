function findNeedle(haystack) {
 
  for(let i = 1; i <= haystack.length; i++){
    if(haystack[i] === "needle"){
      
      return "found the needle at position " + i;
    }
  }
}

