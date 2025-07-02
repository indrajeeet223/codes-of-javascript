function cartprice(val1,val2,...num)  // ...num (rest operator) collect  the remaining arguments into an array: 
{
 return num;
}
console.log(cartprice(100,200,800,400,900));

const bot={
    player:"XINDRA",
    kills:12,
}
function statu(anyobject){
console.log(`my game is ${anyobject.player} and my kills is ${anyobject.kills}`);

}
statu(bot);
statu({
    player:"XARYA",
    kills:21,
})

const myarray=[100,200,500,400,800,900];
function secondindex(anyarray){
    return anyarray[0];
}
console.log(secondindex(myarray)); // can also send a complete array .


