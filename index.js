function produceDrivingRange(blockRange){
  return function(a, b){
    let s = parseInt(a);
    let e = parseInt(b);
    let distance = Math.abs(e - s);
    if (difference > 0) {
      return `within range`
    }else {
      return `${Math.abs(difference)}`
    }
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare*percent;
  }
}
