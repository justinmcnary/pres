var presidents;
var newButton = document.querySelector('#new');
var nextButton = document.querySelector('#next');
var resetButton = document.querySelector('#reset');
var newGame = document.querySelector('#new-game');
var questions = [];
var presNum = document.querySelector('#pres-num');
var question = document.querySelectorAll('.question');
var image = document.querySelector('#image');
var blurb = document.querySelector('#blurb-text');
var message = document.querySelector('#message');
var scoreBox = document.querySelector('#score');
var chanceBox = document.querySelector('#chances');

arrQ = [];
var answer;
var score = 0;
var chances = 3; 

function newQ() {
  blurb.classList.add('hidden');
  nextButton.classList.add('hidden');
  newGame.classList.add('hidden');
  shuffleArray();
  randomQGen();
  pickPres();
  dispQ();
  updateScore();
};

//new random question event listener
newButton.addEventListener('click', function() {
  newQ();
});

nextButton.addEventListener('click', function() {
  newQ();
});

resetButton.addEventListener('click', function() {
  score = 0;
  chances = 3;
  newQ();
});

newGame.addEventListener('click', function() {
  score = 0;
  chances = 3;
  newGame.classList.add('hidden');
  newQ();
});

//add Event listners to answers
for(var i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function() {
    if(this.textContent === answer.name) {
      score++;
      message.textContent= 'Correct!';
      blurb.classList.remove('hidden');
      nextButton.classList.remove('hidden');
    } else {
      chances--;
      updateScore(); 
      message.textContent = 'Try Again';
    };
  });
};

//Shuffle Presidential Data
function shuffleArray(array) {
    for (var i = presidents.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = presidents[i];
        presidents[i] = presidents[j];
        presidents[j] = temp;
    }
  return(presidents);
};

//Generate Question Array
function randomQGen() {
  questions = [];
  for (var i = 0; i < 4; i++) {
    questions.push(presidents[i]);
  }
  return(questions);
};

//Display answers
function dispQ() {
  message.textContent = "";
  for(var i = 0; i < question.length; i++) {
    question[i].textContent = questions[i].name;
  }
};

//Pick president to question
function pickPres() {
  answer = questions[Math.floor(Math.random() * questions.length)];
  presNum.textContent = answer.number;
  image.src = answer.image;
  blurb.textContent = answer.blurb;
  return(answer);
};

//Handle Scoring and Display
function updateScore() {
  scoreBox.textContent = `score: ${score}`;
  chanceBox.textContent = `chances: ${chances}`;
  if(score === 5) {
    message.textContent= "WINNER!"
    image.src = 'https://t3.ftcdn.net/jpg/01/07/31/48/240_F_107314824_sZFb5Gky3202H2x93do25iyYlpma3eul.jpg';
    newGame.classList.remove('hidden');
    blurb.textContent = 'Nice job, would you like to play again?';
    blurb.classList.remove('hidden');
  } else if (chances === 0) {
    alert('Sorry you have lost, time to Study!');
  };
};

shuffleArray();
randomQGen();
pickPres();
dispQ();