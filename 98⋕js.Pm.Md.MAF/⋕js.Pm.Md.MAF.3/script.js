/*⋕js.Pm.Md.MAF.3*/

let arr = [];

for (let i = 0; i < 3; i ++){
    arr[i] = [];
    for (let j = 0; j < 2; j++){
        arr[i][j] = [];
        for (let k = 1; k < 5; k++ ){
            arr[i][j] = k;
        }
    }
}

console.log(arr);