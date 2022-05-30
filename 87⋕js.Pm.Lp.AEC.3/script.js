/*⋕js.Pm.Lp.AEC.3*/

let str = 'adsgdfgdhsddhaqddgaaadgser';
let obj = {};

for (let key of str){
    if (obj[key] === undefined) {obj[key] = 1}
    else {obj[key]++}
};

console.log(obj);