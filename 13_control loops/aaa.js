let temp=54;
if(temp<34)
{
    console.log(`temp is under 34 `);
    
}
else {
    console.log(`temp is greater than 34 `);
    
}

const bal=2000;
if(bal>500) console.log("balance"),
console.log("price");

 const month=31;
 const year="feb";
 
 switch (month) {
    case 1:
        console.log("janavary");
        
        break;
    case 2:
        console.log("february");
        
        break;
    case 3:
        console.log("march");
        
        break;
 
    default:
        console.log("plesae");
        
        break;
 }
 switch (year) {
    case "jan":
        console.log("janavary");
        
        break;
    case "feb":
        console.log("february");
        
        break;
    case "mar": 
        console.log("march");
        
        break;
 
    default:
        console.log("plesae");
        
        break;
 }

 const obj={}

 if(Object.keys(obj).length===0) console.log("empty object ");
 
// terminary operator .
let icecream=200;
(icecream>100) ? console.log("expencive"):console.log("cheap ");

