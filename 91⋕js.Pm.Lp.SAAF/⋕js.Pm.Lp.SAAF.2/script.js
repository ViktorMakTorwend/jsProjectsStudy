/*⋕js.Pm.Lp.SAAF.2*/

let arr = [];

for (let i = 0; i < 5; i++){
    let str = '';
    for(let k = 0; k < 5; k++){
       str += i+1; 
    }
    arr[i] = str;
}

console.log(arr);