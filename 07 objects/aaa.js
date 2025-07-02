// use of singleton in objects .
/*
const tinder=new Object();  // {} it is also works .

tinder.name="indra";
tinder.isloginedd=false;
tinder.age=14;
console.table([tinder.age,tinder.name,tinder.isloginedd])



const user={
    name :{
        fullname:{
            first:"indrajeet",
            last:"kokate",
        }
    }
}
console.log(user.name);
console.log(user.name.fullname);
console.log(user.name.fullname.first);
*/
const ob1={1:'a',2:'b'}
const ob2={3:'c',4:'d'}
const result=Object.assign(ob2,ob1) // source is ob2 and target is ob1 .
console.log(result);
console.log(ob2); // it is modified due to target it is .
console.log(ob1);
const abc=Object.assign({},ob1,ob2)  // use of spread operator const res={...ob1,...ob2};
console.log(abc);  






