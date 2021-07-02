//read num
//num/3 print fiz 
//num/5 print buz 
//num/15 print fizbuz 
// var num=9
// if(num%15==0){
//     console.log("fizbuz");
// }
// else if(num%3==0){
//     console.log("fiz");
// }
// else if(num%5==0)
// {
//     console.log("buz");
// }

var num=100
var result=""  //empty
if(num%5==0){   //chck its divsb by 5
    result+="fiz"          //add fiz 
}

    if(num%10==0){
        result+="buz"        // add fiz+ buz   bcz fiz is in result now
     
}
console.log(result);
