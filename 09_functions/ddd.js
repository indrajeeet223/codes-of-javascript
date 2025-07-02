function saymyname(){
    console.log('i');
    
}
saymyname(); // no need of console log .
saymyname // it gives refrence  .

function addtwonumer(number1,number2)
{
    console.log(number1+number2);
    
}
addtwonumer(2,4);

function subtwonumber(number23,number32) 
{
    return number23-number32;
}
const result=subtwonumber(32,23);
console.log(result);

function whoislogin(username="sam") // default value .
{
    if(username===undefined)  // !username
    {
        console.log("please enter the name .");
        return ;
        
    }
    return `${username} is logined `;
}
console.log(whoislogin("indrajeet"));
console.log(whoislogin());


