function duplicateEncode(word){
    let lower = word.toLowerCase();
    let counts = {};
    let finalString = "";
    for(let item of lower){
        if(counts[item]){
            counts[item]++;
        }
        else{
            counts[item] = 1;
        }
    }

    for(let char of lower){
        if(counts[char] === 1){
            finalString += '(';
    }else{
            finalString += ')';
        }
    }
    return finalString;
}