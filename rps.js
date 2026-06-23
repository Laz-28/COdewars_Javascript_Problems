const rps = (p1, p2) => {
    p1 = p1.toLowerCase();
    p2 = p2.toLowerCase();
  if(p1 === "scissors" && p2 ==="paper" || p2 === "scissors" && p1 ==="rock" || p1 === "paper" && p2==="rock"){
    return "Player 1 won!";
}else if(p1 === "scissors" && p2 ==="rock" || p1 === "paper" && p2 ==="scissors" || p2 === "paper" && p1 === "rock" ){
    return "Player 2 won!";
}else if(p1 === "paper" && p2 === "paper" || p1 === "rock" && p2 === "rock" || p1 ==="scissors" && p2 === "scissors"){
    return "Draw!";
}else{
  return "Invalid Inputs!";
}
};



console.log(rps("Rock","scissors"));

function rps(p1, p2){
    p1 = p1.toLowerCase();
    p2 = p2.toLowerCase();
if(p1===p2){
    return "Draw!";
}

    let rules = {
        rock:"scissors",
        paper:"rock",
        scissors: "paper"
    }

    if(p2 === rules[p1]){
        return "Player1 won!"
    }else{
        return "Player2 won!"
    }

}

console.log(rps("Rock","scissors"));
