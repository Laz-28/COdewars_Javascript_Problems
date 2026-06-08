function filterList(l){
  return console.log(l.filter(item => typeof item === 'number'));
}

filterList([1,2,'a','b'])