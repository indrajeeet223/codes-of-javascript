const map=new Map()    // only stores unique values .
map.set('inr',"rupees ");
map.set('usda',"amrerican dollars ");
map.set('tr20',"tron");
console.log(typeof map);
console.log(map);

for (const i of map) {
   //  console.log(map[i]);   undefined 
   console.log(i);
   
    
}
for (const [key,value] of map) {
    console.log(key,":-",value);
    
}
/*
const ob1={
    game1:"cod",
    game2:"bgmi"
}
for (const [key,value] of ob1) {
    console.log(key,":-",value);
    
}
    */



 