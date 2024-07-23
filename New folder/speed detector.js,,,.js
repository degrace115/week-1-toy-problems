function checkSpeed(speed) {
  const speedLimit = 70;
  let demeritPoints = 0;

  if (speed <= speedLimit) {
      console.log("Ok");
  } else {
      demeritPoints = Math.floor((speed - speedLimit) / 5);
      console.log(`Points: ${demeritPoints}`);

      if (demeritPoints > 12) {
          console.log("License suspended");
      }
  }
}

// Example call
checkSpeed(80); // Change the value to test other speeds
