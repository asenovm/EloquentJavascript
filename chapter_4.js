function range(to, from){
  var arr = [],
      i = typeof from == "undefined" ? 0 : from,
      j = 0;
  for( ;i<=to;++i){
    arr[j++] = i;
  }
  return arr;
}

function startsWith(source, startsWithString){
  return source.slice(0,startsWithString.length) == startsWithString;
}

function extractDate(paragraph){
  var date = paragraph.slice(paragraph.indexOf('died') + 5, paragraph.indexOf(':'));
  var times = date.split('-');
  return new Date(Number(times[2]),Number(times[1]), Number(times[2]));
}

function between(string, firstPattern, otherPattern){
  return string.slice(string.indexOf(firstPattern) + firstPattern.length, string.indexOf(otherPattern));
}

function formatDate(date){
  var month = date.getMonth() + 1;
  month = month < 10 ? "0" + month : month;
  return date.getDate() + "/" + month  +
         "/" + date.getFullYear();
}

function sum(array){
  var sum = 0;
  for(var variable in array){
    sum += Number(variable);
  }
  return sum;
}
