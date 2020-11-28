// Declared variables
var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// Retreives local stroage 
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);

    }
}
// Event listener to move to index page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});

  




  // when this start game button is clicked
  // (addevent listener to the start button)
        let timeReaining = 75;
  // Start the timer (set intervall) startTimer();
  setInterval((function name(params) {
      // time
  }) => {
      
  }, interval);

  // update the dom with the first quastion
  let quastion = [

  ]

  // and dispaly the choise assoc with the question
  // if user selected the correct ans

//loade the next question + the assoc choices to the dom
//tell the user selected correct ans

// if user selected the wrong asn
//decrease the timer
//load the nest question + the assoc choices to the dom
// tell user selected wrong ans

// we also need a way to check for game over
// 1. time becoes 0 or <0
//2. user finished all question 

// what to do once game is finished
// 1. display result 
// clear the dom
// ask for initial/username
// show 
