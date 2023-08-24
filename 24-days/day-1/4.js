// String reverse without reversing of individual words (Array of elements can be reverse with reverse() method but for string it is won't possible so required to split and then join

let arr = "priyal i am good".split(" ")
console.log(arr);
let result = [];
for (let i = arr.length-1; i >= 0; i--){
    result = result + arr[i]

} console.log(result)


// let arr = "hi i am sans";
// let n = arr.split(" ").reverse().join(' ')
// console.log(n)