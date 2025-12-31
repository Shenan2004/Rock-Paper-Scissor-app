/*let Fname;
let Sname;

document.getElementById("submit").onclick = function(){
    Fname = document.getElementById("fname").value;
    Sname = document.getElementById("sname").value;

    document.getElementById("H1").textContent = `Hello ${Fname} ${Sname} 👋`;

    console.log(`Full name : ${Fname} ${Sname}`);
} */
 
    const choices = ["rock", "paper", "scissors"];
    const playerDisplay = document.getElementById("playerDisplay");
    const computerDisplay = document.getElementById("computerDisplay");
    const resultDisplay = document.getElementById("resultDisplay");

    function playGame(playerChoice){

        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        if(playerChoice === computerChoice){
            result = "IT'S A TIE! ";
        }else{
            switch(playerChoice){
                case "rock":
                    result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOOSE!";
                    break;
                case "paper":
                    result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOOSE!";
                    break;
                case "scissors":
                   result = (computerChoice === "rock") ? "YOU LOOSE!" : "YOU WIN!";
                    break;
            }
        }

        playerDisplay.textContent = `PLAYER: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("greenText", "redText");

        switch(result){
            case "YOU WIN!":
                resultDisplay.classList.add("greenText");
                break;
            case "YOU LOOSE!":
                resultDisplay.classList.add("redText");
        }
    }