function abs(x){
  return x >= 0 ? x : -x;
}

function greaterThan(x){
  return function(y){
    return y > x;
  }
}
