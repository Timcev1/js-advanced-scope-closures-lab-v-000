function produceDrivingRange(blockRange){
  return function(a, b){
    let s = parseInt(a);
    let e = parseInt(b);
    let distanceToTravel = Math.abs(e - s);
    let dif = blockRange - distanceToTravel;
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
