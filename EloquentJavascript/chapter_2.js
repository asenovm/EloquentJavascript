function pow(num, power){
  var i = 0;
  var result = 1;
  for( ;i<power;++i){
    result *= num;
  }
  return result;
}

function triangle(){
  var i =0,
      j = 0;
  var result = "";
  for( ;i<10;++i){
    for( ;j<=i;++j){
      result += '#';
    }
    j = 0;
    result += '\n';
  }
  return result;
}

function checkAnswer(){
  var answer = Number(prompt("What's the value of 2 + 2", ""));
  if(answer == 4){
    alert('Great');
  } else if(answer == 3 || answer == 5){
    alert('Almost there');
  } else{
    alert('not quite');
  }
}

function checkAnswerRepeatedly(){
  var answer = null;
  while(answer != 4){
    answer = Number(prompt("What's the value of 2 + 2",""));
    if(answer == 4){
      alert('Great');
    } else if(answer == 3 || answer == 5){
      alert('not quite');
    } else{
      alert('Try hatder');
    }
  }
}
