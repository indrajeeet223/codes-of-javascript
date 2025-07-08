const call={
    username:"ritesh",
    price:1233,
    isloginned:true,
    whoislogin:function()
    {
        console.log(`${this.username} , is loginned `);  // this gives current context.
        console.log(this);      // this  works in only in object not in function.-> undefined .

        
        
    }
}
call.whoislogin();
call.username="Indrajeet";
call.whoislogin();
console.log(this);  // direct empty object .  in browser window is global object .
// global execution context . 
function chai()
{
   let  usernam="abhi" 
    console.log(this.usernam);
    
}
chai();
const tea=() =>{      // arrow function .
console.log("hi");

}
tea();

const sugar=(num1,num2) => {
    return num1+num2;
}
console.log(sugar(12,34));

const honey=(num1,num2) =>  (num1+num2);  // if we use {} brackets return is neccessary .
console.log(honey(23,45));

const xyz=() => ({username:"honey"});
console.log(xyz());
const ob1=xyz();
console.log(ob1.username);








