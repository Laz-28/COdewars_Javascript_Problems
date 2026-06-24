function findMiddleChar(s){
    let size = s.length;
    let middle = Math.floor(size/2);

    if(size%2 === 0){
        return s[middle - 1] + s[middle]
    }
    return s[middle];
}

console.log(findMiddleChar("Oppenhaimer"));