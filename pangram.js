function isPangram(string){
    let alphabets = 'abcdefghijklmnopqrstuvwxyz';
    let lowerString = string.toLowerCase();

    for(let letter of alphabets){
       if(!lowerString.includes(letter)){
        return false;
       }

    }

    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));

function isPangram(string){
    let cleaned = string.toLowerCase().replace(/[^a-z]/g,'');
    let uniqueLetters = new Set(cleaned);
    return uniqueLetters.size === 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."));