/*⋕js.Pm.Lp.AFr.14*/

let arr = ['sun', 'mon', 'th', 'wen', 'thd', 'fr', 'sut'];

for (let i = 0; i < arr.length; i++){
   if (arr[i] == 'sun' || arr[i] == 'sut') {document.write('<i>' + arr[i] + '</i>' + '<br>')}
   else {document.write(arr[i] + '<br>')};
}