// * Remember to run "go live" below to see your changes on save.

// * write all your code INSIDE the function below
function init() {
    let player = {
        currentChoice: null
      };
      
      let computer = {
        currentChoice: null
      };
      
      // Options available for the players
      function playerButton(event) {
        const options = ["rock", "paper", "scissors"];
      
        if (event.target.id === "rock") {
          player.currentChoice = options[0];
        } else if (event.target.id === "paper") {
          player.currentChoice = options[1];
        } else {
          player.currentChoice = options[2];
        }
        // Objects for the players and the computer
        //player.currentChoice = options[0];
      
        // Computer's random choice
      
        // Functions
        function computerChooses() {
          const randomIndex = Math.floor(Math.random() * options.length);
          computer.currentChoice = options[randomIndex];
        }
      
        computerChooses();
      
        function compareChoices() {
          // Check player choice rock
          if (player.currentChoice === computer.currentChoice) {
            displayResult(
              "It's a tie! The computer chose " +
                computer.currentChoice +
                " and the player chose " +
                player.currentChoice
            );
            return;
          } else if (player.currentChoice === options[0]) {
            if (computer.currentChoice === options[2]) {
              displayResult(
                "The player wins! The player chose " +
                  player.currentChoice +
                  " and the computer chose " +
                  computer.currentChoice +
                  "."
              );
              return;
            } else {
              displayResult(
                "The computer wins! The player chose " +
                  player.currentChoice +
                  " and the computer chose " +
                  computer.currentChoice +
                  "."
              );
              return;
            }
      
            //Check player choice Paper
          } else if (player.currentChoice === options[1]) {
            if (computer.currentChoice === options[0]) {
              displayResult(
                "The player wins! The player chose " +
                  player.currentChoice +
                  " and the computer chose " +
                  computer.currentChoice +
                  "."
              );
            } else {
              displayResult(
                "The computer wins! The player chose " +
                  player.currentChoice +
                  " and the computer chose " +
                  computer.currentChoice +
                  "."
              );
            }
            //Check player choice Scissors
          } else if (player.currentChoice == options[2]) {
            if (computer.currentChoice == options[1]) {
              displayResult(
                "The player wins! The player chose " +
                  player.currentChoice +
                  " and the computer chose " +
                  computer.currentChoice +
                  "."
              );
            } else {
              displayResult(
                "The computer wins! The player chose " +
                  player.currentChoice +
                  " and the computer chose " +
                  computer.currentChoice +
                  "."
              );
            }
            //Checking for a tie
          } else {
            displayResult(
              "There is a tie! The computer and the player chose " +
                computer.currentChoice +
                " ."
            );
          }
        }
        compareChoices();
      }
      // add a new paragraph to display the result from compareChoices funtion
      function displayResult(result) {
        textResult = document.createElement("p");
        textResult.innerText = result;
        document.body.appendChild(textResult);
      }
      
      document.getElementById("rock").addEventListener("click", playerButton);
      
      document.getElementById("paper").addEventListener("click", playerButton);
      
      document.getElementById("scissors").addEventListener("click", playerButton);

      //reset button????
   document.getElementById("#reset").addEventListener("click", function() {
window.location.reload()
})
   
}


// ! do not touch below here
window.addEventListener('DOMContentLoaded', init)
