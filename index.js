var readlineSync=require('readline-sync');
var score=0;
const chalk=require('chalk');
function check(question,answers){
  var userAnswer=readlineSync.question(chalk.bgWhite.blue(question));
  // console.log("us"+userAnswer)
  // console.log("a"+answers)
  if(userAnswer==answers){
    score++;
    console.log(chalk.bgGreenBright("you are right!!!"));
      console.log(chalk.greenBright("Currentscore="+score));

  }
  else{
    score--
     console.log(chalk.bgRed("you are wrong!!!"));
      console.log(chalk.red("Currentscore="+score));
  }
}
//add question
  var questionsAdd=[{
     question:"@1:What is 2+5 \n a: 7.\n b: 3 \n c: 34 ? \n",
      answer:"a"},

  {
      question:"@2:What is 2+9 \n a: 27.\n b: 3 \n c: 11 ? \n",
      answer:"c"},
      
       {
      question:"@3:What is 71+29 \n a:2.\n b: 100 \n c: 34 ? \n",
      answer:"b"
    
      },
      {
      question:"@4:What is 23+22 \n a:220.\n b: 40 \n c: 45 ? \n",
      answer:"c"},
      {
      question:"@5:What is 25+77 \n a:102.\n b: 66 \n c: 135 ? \n",
      answer:"a"}
      ];

//sub question
var questionssub=[{
     question:"@1:What is 2-5 \n a: 3.\n b: 7 \n c: 34 ? \n",
      answer:"a"},

  {
      question:"@2:What is 2-9 \n a: 27.\n b: 3 \n c: 7 ? \n",
      answer:"c"},
      
       {
      question:"@3:What is 71-29 \n a:2.\n b: 42 \n c: 34 ? \n",
      answer:"b"
    
      },
      {
      question:"@4:What is 23-22 \n a:220.\n b: 40 \n c: 1 ? \n",
      answer:"c"},
      {
      question:"@5:What is 25-77 \n a:52.\n b: 66 \n c: 135 ? \n",
      answer:"a"}
      ];


//mul question
var questionsMul=[{
     question:"@1:What is 2*5 \n a: 10.\n b: 7 \n c: 34 ? \n",
      answer:"a"},

  {
      question:"@2:What is 2*18 \n a: 27.\n b: 3 \n c: 18 ? \n",
      answer:"c"},
      
       {
      question:"@3:What is 71*29 \n a:782.\n b: 2059 \n c: 3674 ? \n",
      answer:"b"
    
      },
      {
      question:"@4:What is 23*22 \n a:780.\n b: 470 \n c: 506 ? \n",
      answer:"c"},
      {
      question:"@5:What is 25*77 \n a:1925.\n b: 6667 \n c: 1350 ? \n",
      answer:"a"}
      ];

//div question
var questionsDiv=[{
     question:"@1:What is 2/5 \n a: 0.4.\n b: 0.7 \n c: 0.8 ? \n",
      answer:"a"},

  {
      question:"@2:What is 18/2 \n a: 4.\n b: 3 \n c: 9 ? \n",
      answer:"c"},
      
       {
      question:"@3:What is 100/20 \n a:7.\n b: 5 \n c: 3 ? \n",
      answer:"b"
    
      },
      {
      question:"@4:What is 25/5 \n a:8.\n b: 4 \n c: 5 ? \n",
      answer:"c"},
      {
      question:"@5:What is 77/7 \n a:11.\n b: 12 \n c: 13 ? \n",
      answer:"a"}
      ];




//combine question
var questionsCombine=[{
     question:"@1:2 x (-2)?\na: -4\nB: -2\nC: 4\n",
      answer:"a"},

  {
      question:"@2:-8 x (-3)?\na: -4\nB:4 \nC: 24\n",
      answer:"c"},
      
       {
      question:"@3:4*5 \n a:7.\n b: 20 \n c: 3 ? \n",
      answer:"b"
    
      },
      {
      question:"@4:-2 x (-2) x (-2) \n a:8.\n b: 4 \n c: -8 ? \n",
      answer:"c"},
      {
      question:"@5:(-12 / 3) \n a:-4.\n b: 12 \n c: 13 ? \n",
      answer:"a"}
      ];



  var high_Score=[
    {scores: 7}
  ];

function highScore11(){
  for(var i=0;i<high_Score.length;i++){
    var current_high_Score=high_Score[i];

    if(score>current_high_Score.scores){
      current_high_Score.scores=score;
      console.log(chalk.bgCyan("Congrats You Broke The Old Record"));
    }
  console.log(chalk.red("CurrentScore:",score));
  console.log(chalk.bgRed("HighScore:",  current_high_Score.scores));
  //
var user_input1=readlineSync.question(chalk.bgWhite.bold("Enter  1 To Play Again!!:\nOR Press Any Other Key To Exit\n"));
 if(user_input1==1){
 start();
   }
   else{
     process.exit();
   }
  //
  
  }
  }


function allCall(){
console.log(chalk.bgCyan("Congratulations!! You are on Level 2"));
for(var i=0;i<questionsCombine.length;i++){
  var currentQuestion=questionsCombine[i];
check(currentQuestion.question,currentQuestion.answer);
}
highScore11();
}



function addCall(){

for(var i=0;i<questionsAdd.length;i++){
  var currentQuestion=questionsAdd[i];
check(currentQuestion.question,currentQuestion.answer);
if(score>=5){
  allCall();
}

}
// highScore11();
}




function subCall(){
  for(var i=0;i<questionssub.length;i++){
  var currentQuestion=questionssub[i];
check(currentQuestion.question,currentQuestion.answer);
if(score>=5){
  allCall();
}

}
// highScore11();
}


function mulCall(){
for(var i=0;i<questionsMul.length;i++){
  var currentQuestion=questionsMul[i];
check(currentQuestion.question,currentQuestion.answer);
if(score>=5){
  allCall();
}

}
// highScore11();
}

  function divCall(){
    
    for(var i=0;i<questionsDiv.length;i++){
    var currentQuestion=questionsDiv[i];
  check(currentQuestion.question,currentQuestion.answer);
}
  if(score>=5){
  allCall();    }
    else {
    gameOver();
  }
  }
 

function gameOver(){
  console.log(chalk.bgBlack.white.bold("ohhh!!! GameOver\n You Did't Qualify For Second Level"));
  
}

console.log(chalk.bgMagenta.bold("Welcome To The Math Quiz App!!"));
var user_input=readlineSync.question(chalk.bgWhite.bold("Enter  1 To Start The Quiz!!\nEnter  ? for Game rules \nEnter Any Other Key To Exit\n"));
 if(user_input==1){
 start();
   }
   if(user_input=="?"){
gameRuleCall();}
else{
     process.exit();
   }
function start(){
var user_input=readlineSync.question(chalk.bgWhite.bold.blue("Enter  '+' for Addition question\nEnter  '-' for Substration question\nEnter  '*' for Multiplication question \nEnter  '/' for division question\n"));

if(user_input=="+"){
addCall();}
if(user_input=="-"){
subCall();}
if(user_input=="*"){
mulCall();}
if(user_input=="/"){
divCall();}
else{
  process.exit()
}
}

function gameRuleCall(){
console.log(chalk.bgBlack.white("Grettings Thank You For Coming\n"));
console.log(chalk.bgWhite.black("*(You Have Three Options For Each Question Choose The Option Which You Think Is Rright)\n"));
console.log(chalk.bgWhite.black("*(If You Score 5 on First Round Then You Can Move To Round two)\n"));
var user_input2=readlineSync.question(chalk.bgBlack.white('press 1 to play game or press any Other key For Exit\n'));

if(user_input2=="1"){
  start();
}
else{
  system.exit();
}
}
  

