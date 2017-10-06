function produceDrivingRange(blockRange){
  return function(start, end){
    return range * blockRange;
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare*percent;
  }
}
