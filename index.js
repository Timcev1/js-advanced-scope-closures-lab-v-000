function produceDrivingRange(blockRange){
  return function(range){
    return range * blockRange;
  }
}

function produceTipCalculator(percent){
  return function(fare){
    return fare*percent;
  }
}
