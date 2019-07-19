// add solution here
function theBeatlesPlay(musician,instrument){
  var beatles = [];
  for (i = 0; i < musician.length; i++){
    beatles.push(`${musician[i]} plays ${instrument[i]}`);
  }
  return beatles;
}