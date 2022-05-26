/*⋕js.Pm.Cd.IEC.3*/

let day = 32;

if (day > 0 && day <= 10){
    alert('This day in first decade');
} else if (day > 10 && day <=20){
    alert('This day in second decade');
} else if (day > 20 && day <=31){
    alert('This day in third decade');
} else if (day < 0 || day >= 32){
    alert ('It is not a day of month');
}
