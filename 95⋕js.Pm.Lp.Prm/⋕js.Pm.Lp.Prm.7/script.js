/*⋕js.Pm.Lp.Prm.7*/

let arr = [-10, 1, 25, 12, -1, 5, 8, 45, 3, 0];
let flag = false;

for (let el of arr){
    if(el === 5){
        flag = true;
        break;
    }
}

console.log(flag);