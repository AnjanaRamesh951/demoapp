//0,1,1,2,3,5,8,13,21
var num1=0,num2=1,sum=0; 
var limit=10,i=0;
console.log(num1,num2);
while(sum<21){ //0<21
    sum=num1+num2; //sum=1
    num1=num2;   //0=1
    num2=sum;   //1   
    console.log(sum);   0,1,1,2
}