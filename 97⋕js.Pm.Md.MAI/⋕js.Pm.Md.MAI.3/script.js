/*⋕js.Pm.Md.MAI.3*/

let arr = [[1, 2, 3], [4, 5], [6]];
let sum = 0;

for (let i = 0; i < arr.length; i++){
    for (let k = 0; k < arr[i].length; k++){
        sum += arr[i][k];
    }
}

console.log(sum);