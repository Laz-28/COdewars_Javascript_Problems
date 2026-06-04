function replaceExclamation(s){
 return console.log(s.split('').filter(item => item !=='!').join(''));

}

replaceExclamation("Hello world!");

function replaceExclamation(s){
    return console.log(s.replaceAll('!',''));
}

replaceExclamation("Hello world!"); 

function replaceExclamation(s){
    return console.log(s.replace(/!/g, ''));
}

replaceExclamation("O!b!a!m!a!");
