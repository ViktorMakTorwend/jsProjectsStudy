/*⋕js.Pm.Lp.Fl.1*/

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let el of arr){
    if (el == 'c'){
      flag = true;
      break;
    }
}

if (flag){console.log('Yes')}
else {console.log('No')};