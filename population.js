function nbYear(p0, percent, aug, p) {
  
  percent = percent / 100;
  let steps = 0;
  
  while (p0 < p) {
    p0 = p0 + Math.floor(p0 * percent) + aug;
    
    steps++;
  }
  
  return steps;
}

console.log(nbYear(1000, 2, 50, 1200)); 