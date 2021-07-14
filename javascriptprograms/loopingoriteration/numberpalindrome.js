//123
//321

var num=123;
var res="";
while(num!=0)  
{
    let digit=num%10;   //digit=123%10=3    12%10=2 1%10=1   digit=123%10=3   12%10=2  2%10=
   // console.log(digit);    //digit=321
   res+=digit;                       // res=3   res=2
    num=Math.floor(num/10)  //num=12.3=12 12/10 =1 1/10=0    num=123/10=12     
}
console.log(res);