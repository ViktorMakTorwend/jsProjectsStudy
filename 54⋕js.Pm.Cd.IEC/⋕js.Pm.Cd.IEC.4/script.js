/*⋕js.Pm.Cd.IEC.4*/

let num = 89;

if (num >= 10 && num <=99){
    let numStr = String(num);
    let sum = Number(numStr[0]) + Number(numStr[1]);

    if (sum <= 9) {alert('The number is singel digit')}
    else {alert ('The number is double digit')}
} else {alert('The number is not in correct range')}