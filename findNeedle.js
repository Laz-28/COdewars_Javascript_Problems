/*function findNeedle(haystack) {
 
  for(let i = 1; i <= haystack.length; i++){
    if(haystack[i] === "needle"){
      
      return "found the needle at position " + i;
    }
  }
}*/

function findNeedle(haystack){
    return `found the needle at position ${haystack.indexOf("needle") + 1}`
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))