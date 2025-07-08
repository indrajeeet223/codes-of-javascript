function pre(val1,val2)
{
    return val1+val2;
}
function post()
{
    const temp=pre(12,45);
    console.log(temp);
    
}
console.log(post());
