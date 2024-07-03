function checkspeed(speed) {
    const speedLimit = 70;
    if (speed <=speedLimit) {
        console.log('ok');
        return0 ;// No demerits points
    } else{
      let demerit point =Math.floor((speed-speedlimit)/ kmperDemerit);
      console.log('points:${demeritspoints}');
      if(demeritspoints >12){
        console.log('License suspended');
      }
      return demeritspoints;
    }
}
//Example usage:
let speed=parseInt(prompt("Enter car's speed:"));
checkspeed(speed);