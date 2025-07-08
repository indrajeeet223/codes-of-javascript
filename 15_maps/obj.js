

const ob1={
    js:"javascript",
    cpp:"c++",
    ds:"data science",
    py:"python"
}
for (const key in  ob1) {    // use of for in 
    console.log(`${key} :- ${ob1[key]}`);
    
}

const myarray=["js","cpp","java","javascript"];
for (const key in myarray) {
    console.log(`${key} :- ${myarray[key]}`);
    
}

            // for in does not use in maps .