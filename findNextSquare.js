function findNextSquare(sq) {
  let currentSqrt = Math.sqrt(sq);
  

  if (!Number.isInteger(currentSqrt)) return -1;
  
  let nextSqrt = currentSqrt + 1;
  let nextSquare = nextSqrt * nextSqrt;
  return nextSquare;
}