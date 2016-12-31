function canaryTest(){
  var currentDate = Date.now();
  var isCanaryExpired = currentDate < Date(2017,1,11);
  if(isCanaryExpired){
    document.write("Oh no, I am dead!")
  } else {
    document.write("Still alive for now!")
  }
}
