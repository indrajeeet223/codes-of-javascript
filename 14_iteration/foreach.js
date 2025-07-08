const myarray=["js","cpp","java","ruby","py"];

myarray.forEach(function(val){
    console.log(val);
    
})
myarray.forEach( (i) => {
    console.log(i);
    
})

function fun(item)
{
    console.log(item);
    
}

myarray.forEach(fun); 

myarray.forEach((item,index,arr) =>
{
    console.log(item,index,arr);
    
})
