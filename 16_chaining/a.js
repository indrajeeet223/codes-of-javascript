const myarr=[1,2,3,4,5,6,7,8,9];
const x=myarr.map((num)=> num*10).
map((item)=> item+1).filter((num)=> num>50);
console.log(x);
