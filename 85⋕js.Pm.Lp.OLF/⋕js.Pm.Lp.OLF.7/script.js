/*⋕js.Pm.Lp.OLF.7*/

let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let result = {}

for (let el in obj){
    result[obj[el]] = el;
}

console.log(result);