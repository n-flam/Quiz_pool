// Global var
var time = 75;
var timeEl = document.getElementById("timer");
var timerId;


var questionsEl = document.getElementById("questions");
var currIndex = 0;
var answersEl = document.getElementById("answers");

function startQuiz(){
    var startScreen = document.getElementById("startscreen");
    
    startScreen.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timeEl.textContent = time;
    showQuestion();
};

// function get the questions
function showQuestion(){
   var currQuestion = questions[currIndex];
   var titleEl = document.getElementById("questionTitle");

   titleEl.textContent = currQuestion.title;
   answersEl.innerHTML = "";
   currQuestion.choices.forEach(function(choice, i) {
       var btncreate = document.createElement("button");
       btncreate.setAttribute("class", "choice");
       btncreate.setAttribute("value", choice);
       btncreate.textContent = i + 1 + "." + choice;
       btncreate.onclick = checkAnswer;
       answersEl.appendChild(btncreate);
   });
  
};

// checking annswers right or wrong
function checkAnswer (){
    if(this.value !== questions[currIndex].answer) {
      time -=15; 
    }
    else {
        time +=10;
    }
    timeEl.textContent = time;
    currIndex ++;
    if (currIndex === questions.length) {
        quizOver();
    }
    else {
        showQuestion()
    }
};

// function timer
function timer (){
    time --;
    timeEl.textContent = time;
    if (time <= 0) {
        quizOver();
    }

};

// function quiz over
function quizOver(){
    clearInterval (timerId);
    questionsEl.setAttribute("class", "hide");
    var endScreenEl = document.getElementById("endscreen");
    endScreenEl.removeAttribute("class");

};

// function highscore
function printHighscores() {
    // either get scores from localstorage or set to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
  
    // sort highscores by score property in descending order
    highscores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    highscores.forEach(function(score) {
      // create li tag for each high score
      var liTag = document.createElement("li");
      liTag.textContent = score.initials + " - " + score.score;
  
      // display on page
      var olEl = document.getElementById("highscores");
      olEl.appendChild(liTag);
    });
  }
  
  function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
  }
  
  document.getElementById("clear").onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();


// local storage
