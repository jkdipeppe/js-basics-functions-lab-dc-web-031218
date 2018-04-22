// Code your solution in this file!
function distanceFromHqInBlocks(streetNum) {
  if (streetNum > 42) {
    return streetNum - 42 ;
  } else {
    return 42 - streetNum;
  }
}

function distanceFromHqInFeet(streetNum ) {
  return distanceFromHqInBlocks(streetNum) * 264
}

function distanceTravelledInFeet(start, end) {
  return Math.abs((end - start) * 264)
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination)

  if (distance < 400) {
    return 0;
  } else if (400 <= distance && distance < 2000) {
    return (distance - 400) * .02;
  } else if (distance >= 2000 && distance < 2500) {
    return 25
  } else if (distance > 2500){
    return 'cannot travel that far'
  }
}
