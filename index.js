var readlineSync = require('readline-sync');
var score = 0

var highScorer = [
{
  name: "Nehal",
  score: 6
},
{
  name: "Kaustubh",
  score: 6
},
{
  name: "Tanmay",
  score: 5
}
];

var questions = [
      {
        question: `In Captain America: The First Avenger, in which country is the Tesseract found by Red Skull?
  a: Romania
  b: Norway
  c: Finland
  d: Ratnagiri\n` ,
        answer: "b"
      }, 
      {
        question: `Which is the first movie of the Marvel Cinematic Universe?
  a: The Incredible Hulk
  b: Iron Man
  c: Thor
  d: Captain America: The First Avenger\n`,
        answer: "b"
      },
      {
        question: `What is the name of Loki's real father and the leader of Frost Giants?
  a: Laufey
  b: Lofn
  c: Leikn
  d: Logi\n`,
        answer: "a"
      },
      {
        question: `Which element used in the arc reactor was poisoning Tony?
  a: Gadolinium
  b: Promethium
  c: Rhodium
  d: Palladium\n`,
        answer: "d"
      },
      {
        question: `What was the name of the radiation that Steve Rogers was subjected to that transformed him into a super soldier?
  a: Delta ray
  b: Zeta ray
  c: Vita ray
  d: Theta ray\n`,
        answer: "c"
      },
      {
        question: `Which Avenger appears briefly in the movie Thor?
  a: Black Widow
  b: Bruce Banner
  c: Clint Barton
  d: Tony Stark\n`,
        answer: "c"
      },
      ];

var userName = readlineSync.question("Enter Your Name: ");
console.log("Welcome" + userName + " To Marvel Quiz ");
for(var i=0; i<questions.length; i++)
{
  play(questions[i].question,questions[i].answer);
}

function play(question, answer)
{
  var givenAns = readlineSync.question(question);
  if(answer === givenAns){
    console.log("Yey, You are right!");
    score = score + 1;
  }
  else {
    console.log("Opps, you are wrong!");
  }
  console.log("Current Score: ",score);
  console.log("----------------------------------------------------");
}
console.log("********************************************************");
console.log("YAY! You SCORED: ",score+"/"+questions.length);
console.log("********************************************************");
console.log("Highest Scorer In this Quiz:");
if(score >= highScorer[0].score){
  console.log("Congratulation!, You Are Now Highest Scorer Of this Quiz.")
  console.log(userName,score);
  for(var i=0; i<highScorer.length; i++) { 
    console.log(highScorer[i].name,highScorer[i].score);
  }
  }else{
    for(var i=0; i<highScorer.length; i++) { 
      console.log(highScorer[i].name,highScorer[i].score);
    }
  }