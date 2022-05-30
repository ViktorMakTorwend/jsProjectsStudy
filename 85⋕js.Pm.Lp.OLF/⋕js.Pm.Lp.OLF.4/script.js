/*⋕js.Pm.Lp.OLF.4*/

let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
let result = {}

for (let el in obj){
    if (obj[el] >= 10 && obj[el] <=20){
        result[el] = obj[el];
    }
}

console.log(result);