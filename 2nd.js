let arr = [0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1];
function sorting(arr) {
    let result=[]
    for (let i = 0; i < arr.length; i++){
        if (arr[0] == arr[i]) {
            result.push(arr[i])
        } 
    }
    for (let i = 0; i < arr.length; i++){
        if (arr[0] !== arr[i]) {
            result.push(arr[i])
        } 
    }
  
    console.log(result)
    }sorting(arr)
   