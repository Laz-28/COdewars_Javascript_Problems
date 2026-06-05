function areYouPlayingJango(name){
    if(name[0].toLowerCase() === 'r'){
        return console.log(`${name} plays banjo`);
    }

    return console.log(`${name} does not play banjo`);

}

areYouPlayingJango("Rudolf");
areYouPlayingJango("Hitler");

function areYouPlayingJango(name){
    return console.log(name + (name[0].toLowerCase === 'r' ? ' plays' : ' does not play') + " banjo");
}

areYouPlayingJango("Rudolf");