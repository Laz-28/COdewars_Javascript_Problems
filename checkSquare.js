function isSquare(n) {
    if(n<0) return false;
    let squareRoot = Math.sqrt(n);
    return console.log(Number.isInteger(squareRoot));

}

isSquare(110);

function isSquare(n) {
    return console.log(Math.sqrt(n) % 1 === 0);
}

isSquare(110);

