const sym=Symbol("my key1");

const obj={
    name:"indra",
    [sym]:"abc",  // symbol used as a key of object .
    age:15,
    "full name ":"indrajeet",
}
/*
console.log(typeof obj.sym);
console.log(obj[sym]);
console.log(typeof obj[sym]);
console.log(obj);
Object.freeze(obj);   // used to freeze the object values .


obj.age=21;
console.log(obj.age);
*/
obj.greetin=function(){    // it works on only on object
    console.log("hello js user ");
    
}
console.log(obj.greetin);  // it gives function refrence  .
console.log(obj.greetin());

// used to access keys in object by using function .
obj.create=function(){
    console.log(`this is my name ${this.name} and my age is ${this.age}`);
    
}
console.log(obj.create());





