const myarray=[
    {
        language:"python",
        languagefile:"py",
    },
    {
        language:"javascript",
        languagefile:"js",
    },
    {
        language:"c++",
        languagefile:"cpp",
    },

    {
        language:"ruby",
        languagefile:"rs",
    }
]

myarray.forEach((item) =>{                      // for each loop does not return any values  . undefined  .
    console.log(item.language,item.languagefile);
    
})

    // filter returns some kind of data .
    
const arr=[1,2,3,4,4,5,6,7,8,9,12];

const x=arr.filter((i) => i<5)   // if we open a scope {} then use return i<5 .
console.log(x);

