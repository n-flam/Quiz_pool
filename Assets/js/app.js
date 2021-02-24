// function strat quiz put them in array
var questions = [
    {
        title: "What is the name of Picassos War painting?",
        choices:["The Old Guitarist", "Guernica", "Blue Nude", "The Dream"],
        answer: "Guernica"
    },
    {
        title: "Which style was Claude Monet panting in?",
        choices:["Surrealism", "Art Deco", "Cubism", "Impressionism"],
        answer: "Impressionism"
    },
    {
        title: "Who is the artist of 'THE SCREAM'?",
        choices:["Claude Monet", "Edvard Munch", "Pablo Picasso", "Vincent van Gogh"],
        answer: "Edvard Munch"
    },
    {
        title: "Who paitet the 'Mona Lisa'?",
        choices:["Rembrandt van Rijn", "Salvador Dalí", "Antoni Gaudí", "Leonardo da Vinci"],
        answer: "right answer"
    },
    {
        title: "'The birth of Venus' was paitet by?",
        choices:["Sandro Botticelli", "Johannes Vermeer", "Antoni Gaudí", "Claude Monet"],
        answer: "right answer"
    }
];

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
function highScore(){
    var
};



