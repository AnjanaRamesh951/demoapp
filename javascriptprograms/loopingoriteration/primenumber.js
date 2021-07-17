//chk nmbr is prme or not
var num = 18;//(1,23)
var flag=0;
//2,16
for (let i = 2; i<num; i++) {  //2,.....17
    if (num % i == 0) {    //factor
        flag+=1;
    }
}
    if(flag==0){
        console.log("prime");
    }
    else{
        console.log("not prime");
    }
