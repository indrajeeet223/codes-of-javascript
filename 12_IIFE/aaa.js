/*
Avoid polluting global scope (helps create private variables).

Execute code immediately.

Useful in modular code or closures. 
*/
(function chai()
{
    console.log("hello");
    
})();
// it defines as ()() 
const honey=(function()
{
    console.log('world');
    
})();
(  () =>{
    console.log("hiii");
    
}

 )();   // use ; to stop or execute it .

 ( (name)=>
{
    console.log(name);
    
})("indra");
