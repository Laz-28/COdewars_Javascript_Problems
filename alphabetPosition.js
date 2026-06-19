function alphabetPosition(text){
    let lowerText = text.toLowerCase();
    let result = [];

    for(let char of lowerText){
        let code = char.charCodeAt(0);

        if(code >= 97 && code <= 122){
            let position = code - 96;

            result.push(position);
        }
    }

    return result.join(' ');
}

console.log(alphabetPosition("A cow is eating"));
