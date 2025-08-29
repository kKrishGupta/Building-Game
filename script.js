let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () =>{
// rock l,paper , scissors
const options = ["rock" ,"paper" ,"scissor"];
}

const playGames = (userChoice) =>{
console.log("user choice = ", userChoice);
//  generate computer choice --> modular

};
choices.forEach((choice) => {
choice.addEventListener("click", () =>{
  const choiceId = choice.getAttribute("id");
  console.log("choice was clicked!!",choiceId);
});
});