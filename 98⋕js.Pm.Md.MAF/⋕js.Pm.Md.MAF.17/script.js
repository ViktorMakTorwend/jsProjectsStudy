/*⋕js.Pm.Md.MAF.17*/

let arr = [];

for (let i = 0, n = 1; i < 2; i++){
    arr[i] = [];
    for (let j = 0; j < 2; j++){
        arr[i][j] = [];
        for (let k = 0; k < 2; k++){
            arr[i][j][k] = n;
            n++;
        }
    }
}

console.log(arr);



