let array = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0];
let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      result.push(0);
      console.log(result);
    }
  }
    for (let i=0; i < array.length; i++) {
        
        if (array[i] === 1) {
            result.push(1)
        }
}

console.log(result);





