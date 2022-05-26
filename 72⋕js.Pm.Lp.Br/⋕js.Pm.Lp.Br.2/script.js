/*⋕js.Pm.Lp.Br.2*/

let arr = [0, 4, 2, 5, 14, -1, 7];
let sum = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] >=0){sum += arr[i]}
    else {break;}
}
alert (sum);