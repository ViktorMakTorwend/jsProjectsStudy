/*⋕js.Pm.Lp.APF.4*/

let arr = [1, 2, 3, -4, 5, -7, 8, 9];
let result = [];

for (let elem of arr){
    if (elem > 0){
        result.push(elem);
    }
}

console.log(result);