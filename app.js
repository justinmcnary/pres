var presidents = [
  {name:'George Washington', number: 'First', image:'https://fthmb.tqn.com/Fy5zr4roRa9ZVadcl38JvXxvefg=/768x0/filters:no_upscale()/about/washington-569ff8713df78cafda9f57b8.jpg', blurb:"George Washington was the first U.S. President, serving from 1789 until 1797. He made Thanksgiving a national holiday in 1789 and he signed the first-ever copyright law in 1790. He only vetoed two bills during his entire time in office. Washington holds the record for the shortest-ever inaugural address. It was only 135 words and took less than two minutes."},
  {name:'John Adams', number: 'Second', image:'https://fthmb.tqn.com/kEcEtW8YnkwCO4oPs-aZccJs_SE=/768x0/filters:no_upscale()/about/2_adams-569ff8713df78cafda9f57c4.jpg', blurb: "The second president, John Adams also served as George Washington's vice president. But Washington never lived in the White House – Adams was the first to do that. He served from 1797 through 1801. His bid for reelection failed. Adams and Thomas Jefferson died on the same day."},
  {name:'Thomas Jefferson', number: 'Third', image:'https://fthmb.tqn.com/Z-DId7_i1BnLeH2koN6MeEF7WAI=/768x0/filters:no_upscale()/about/t_jefferson-569ff8713df78cafda9f57be.jpg', blurb: "Thomas Jefferson served two terms from 1801 to 1809. He's credited with writing the original draft of the Declaration of Independence. Elections worked a little differently back in 1800. Vice presidents had to run as well, separately and on their own. Jefferson and his running mate, Aaron Burr, both received the exact same number of electoral votes. The House of Representatives had to vote to decide the election. Jefferson won."},
  {name:'James Madison', number: 'Fourth', image:'https://fthmb.tqn.com/0hZc0iJtu5xtf5yTX8OwiWKU3bQ=/768x0/filters:no_upscale()/about/4_madison-569ff8723df78cafda9f57c7.jpg', blurb: "James Madison ran the country from 1809 through 1817. He was diminutive, only 5 feet 4 inches tall, short even by 19th century standards. Despite his stature, he was one of only two American presidents to actively take up weapons and wade into battle. He participated in the War of 1812 and had to borrow the two pistols he took with him. Abraham Lincoln was the other. Madison had two vice presidents, both of whom died in office. He declined to name a third after the second death."},
  {name:'James Monroe', number: 'Fifth', image:'https://fthmb.tqn.com/XusNIEsSkrNa6ZCrX9_BmBk-Bb8=/768x0/filters:no_upscale()/about/5_monroe-569ff8725f9b58eba4ae31bb.jpg', blurb:"Monroe served from 1817 through 1825. He has the distinction of having run unopposed for his second term in office in 1820. He did not receive 100 percent of the electoral votes, however, because a New Hampshire elector just didn't like him and refused to vote for him. He died on the Fourth of July, as did Thomas Jefferson, John Adams and Zachary Taylor."},
  {name:'John Quincy Adams', number: 'Sixth', image:'https://fthmb.tqn.com/_dhKjRRANNOSDZIp6gyHuuOw7nk=/768x0/filters:no_upscale()/about/6_john_q_adams_1-569ff8725f9b58eba4ae31be.jpg', blurb: "Our sixth president was John and Abigail Adams' son. He served from 1825 until 1829. A Harvard graduate, he was a lawyer before he took office, although he never actually attended law school. Four men ran for president in 1824, and none garnered enough electoral votes to take the presidency. The House of Representatives then offered a 'runoff' vote, which Adams won. Adams went on to serve in the House of Representatives after serving as president, the only president ever to do so."},
  {name:'Andrew Jackson', number: 'Seventh', image: 'https://fthmb.tqn.com/MmOK_fl5hRre7zLIVUkNv1reir8=/768x0/filters:no_upscale()/about/Andrew_jackson_head-569ff8703df78cafda9f57b2.gif', blurb: "Andrew Jackson was one of those who lost to Adams in the 1824 runoff vote ordered by the House, despite tallying the most popular votes in that election. Adams then lost his bid for reelection to Jackson in 1828. Jackson went on to serve two terms from 1829 until 1837. Nicknamed 'Old Hickory,' people of Jackson's era tended to either love him or hate him. Thomas Jefferson was said to be one of the latter. Jackson was quick to grab his pistols when he felt someone had offended him and he engaged in numerous duels over the years. He was shot twice in the process and killed an opponent as well. "},
  {name:'Martin Van Buren', number: 'Eighth', image:'https://fthmb.tqn.com/lHAFutBysruEZm1uIHi2Uhb5Nm4=/768x0/filters:no_upscale()/about/8_van_buren_1-569ff8723df78cafda9f57ca.jpg', blurb:"Martin Van Buren was a one-term president, serving from 1837 through 1841. He was the first 'real' American to hold the office because he was the first to have been born after the American Revolution. He's credited with introducing the term 'OK' into the English language. His nickname was 'Old Kinderhook,' coined from the New York village in which he was born. When he ran for reelection in 1840, his supporters rallied for him with signs that read 'OK!' He lost to William Henry Harrison nonetheless, resoundingly so – 234 electoral votes to just 60."},
  {name:'William Henry Harrison', number: 'Ninth', image: 'https://fthmb.tqn.com/L259oTtLEFgtVf_-Cd_kowuw4Ww=/768x0/filters:no_upscale()/about/9_william_harrison-569ff8725f9b58eba4ae31c1.jpg', blurb: "Harrison was the ninth President of the United States, taking over in March 1841. He died exactly one month later of pneumonia. It was the first time a president died in office. It was a quiet demise for a man who had once fought Native Americans on the American frontier. "},
  {name:'John Tyler', number: 'Tenth', image: 'https://fthmb.tqn.com/qoyl9rHOUKuxhjcws629bIEZHQY=/768x0/filters:no_upscale()/about/10_john_tyler_1-569ff8725f9b58eba4ae31c4.jpg', blurb:"John Tyler served one term from 1841 through 1845. He was Harrison's vice president, having run for that office on the Whig ticket. He didn't get along very well with the Whig party after he assumed the presidency, however – they tried to impeach him. Tyler was also a southern sympathizer and a staunch supporter of states' rights. He later voted in favor of Virginia's secession from the union and served on the Confederate Congress."}
];

var newButton = document.querySelector('#new');
var resetButton = document.querySelector('#reset');
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

resetButton.addEventListener('click', function() {
  score = 0;
  chances = 3;
  newQ();
});

//add Event listners to answers
for(var i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function() {
    if(this.textContent === answer.name) {
      score++;
      message.textContent= 'Correct!';
      blurb.classList.remove('hidden');
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
    alert('WINNER ! Nice Job');
  } else if (chances === 0) {
    alert('Sorry you have lost, time to Study!');
  };
};

shuffleArray();
randomQGen();
pickPres();
dispQ();