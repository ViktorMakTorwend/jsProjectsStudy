/*⋕js.Pm.Lp.FChT.1*/

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

let increaseSalary = {};

for (let eml in obj){
    increaseSalary[eml] = (obj[eml] / 10) + obj[eml];
}
console.log(increaseSalary);