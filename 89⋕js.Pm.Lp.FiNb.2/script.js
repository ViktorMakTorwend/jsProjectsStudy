/*⋕js.Pm.Lp.FiNb.2*/

let num1 = 0;
let num2 = 1;
let num3 = 2;
let arrFib = [0, 1, 2];

for (let i = 0; i <=10; i++){
    let num4 = (num1 + num2 + num3);
    num1=num2;
    num2=num3;
    num3=num4;
    arrFib.push(num4);
}

console.log(arrFib);