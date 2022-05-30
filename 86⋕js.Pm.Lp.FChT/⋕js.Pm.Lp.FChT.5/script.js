/*⋕js.Pm.Lp.FChT.5*/

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
let arr1 = [];
let arr2 = [];

for (let el in obj){
    arr1.push(obj[el]);
    arr2.push(el);
};    
console.log(arr1);
console.log(arr2);