function persistence(num){
    let steps = 0;
    while(num >= 10){
        multiply = 1;
        while(num > 0){
            multiply *= num % 10;
            num = Math.floor(num/10);
        }

        num = multiply;
        steps ++;

    }
    return steps;
}

console.log(persistence(128))