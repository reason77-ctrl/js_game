/** Use JavaScript to create a game of snake, water & gun. The game should ask you to enter S, W or G.
    The computer should be able to randomly generate S, W or G and declare Win or loss using alert.
    Use confirm and prompt whenever required.
**/


let s_w_g = (SWG) => {
    return Math.floor(Math.random() * SWG);
}
let randomGuess = s_w_g(3);

let runAgain = true;
while (randomGuess && runAgain) {
    let randomGuess = s_w_g(3);
    console.log(randomGuess);
    let game = prompt("Choose Snake, Water or Gun");
    if (game ==="S" || game === "s"){
        game = 0;
    }
    else if(game === "W" || game === "w"){
        game = 1;
    }
    else if(game ==="G" || game === "g"){
        game = 2;
    }

    if (randomGuess === 0 && game === 0){
        alert("Its a draw! Computer and You both chose Water.");
    }
    else if(randomGuess === 0 && game === 1){
        alert("Computer Wins! Computer chose Snake and You chose Water.");
    }
    else if(randomGuess === 0 && game === 2){
        alert("You win! Computer chose Snake and You chose Gun.");
    }
    else if(randomGuess === 1 && game === 0){
        alert("You win! Computer Chose Water and You chose Snake.");
    }
    else if(randomGuess === 1 && game === 1){
        alert("Its a draw! Computer and You both chose Water.");
    }
    else if(randomGuess === 1 && game === 2){
        alert("Computer wins! Computer chose Water and You chose Gun.");
    }
    else if(randomGuess === 2 && game === 0){
        alert("Computer wins! Computer chose Gun and You chose Snake.");
    }
    else if(randomGuess === 2 && game === 1){
        alert("You win! Computer chose Gun and You chose Water.");
    }
    else if(randomGuess === 2 && game === 2){
        alert("Its a draw! Computer and You both chose Gun.");
    }
    runAgain = confirm("Do you want to play again?");
}