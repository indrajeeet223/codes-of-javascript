const myarr=[1,2,3,4,5,6,7,7,8,9,12];
const total=myarr.reduce((acc,currvalue)=>{   // acc+currvalue,0
    console.log(acc,currvalue);
    return acc+currvalue;
    
},0)
console.log(total);

const cart=[
    {

        course:"java",
        price:299 
    },
    {

        course:"python",
        price:199
    },
    {

        course:"cpp",
        price:799
    },
    {

        course:"ruby",
        price:99
    }

]
const x=cart.reduce((acc,item)=> acc+item.price,0);
console.log(x);
