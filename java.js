var userChoice;
var randomNumber; 
var computerChoice; 

userChoice = prompt("heads or tails");

randomNumber = Math.round(Math.random());
if (randomNumber < 0.5) {
    randomNumber = 0;
}
if (randomNumber > 0.5) {
    randomNumber = 1;
 }



if (randomNumber <= 0) {
        computerChoice = "heads";
    } 
 if (randomNumber >= 1) {
        computerChoice = "tails";
} 
 if (userChoice === computerChoice) { 
      alert("You guessed right! The coin flip landed on " + userChoice);
 } else { 
     alert("Sorry, the coin flip landed on " + computerChoice);
 } 

 var birthYear; 
  
 birthYear = prompt("Your Birthyear"); 

 if ((2021 - birthYear) > 21) {
     alert("You are old enough to drink in the US");
 }
  if ((2021 - birthYear) == 21) {
     alert("You are old enough to drink in the US...barely");
 } 
 if ((2021 - birthYear) < 21) {
     alert("Sorry, you are not old enough to drink in the US");
 }

 