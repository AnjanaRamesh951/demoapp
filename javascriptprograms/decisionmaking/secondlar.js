// var num1=10
// var num2=9
// var num3=2
// if(num1<num2 & num1>num3){
//     console.log(`${num1} is secnd largest` );
// }
// else if(num2<num1 & num2>num3)
// {
//     console.log(`${num2} is secnd lar`);
// }
// else if(num3<num1&num3>num2){
//     console.log(`${num3} is secnd lar `);
// }
// else if(num1==num2&num1==num3){
//     console.log("3 numbers are equal");
// }








// or.
var num1=500
var num2=2000
var num3=20
if(num1>num2&num1>num3)
{
    console.log(`${num1} is largest numbr`); //num1 laar
    if(num2>num3)//to find scnd lar
    {
        console.log(`${num2} is second largest`);
        console.log(`${num3} is third largest`);
    }
    else
    {
        console.log(`${num3} is secnd lar`);
        console.log(`${num2} is third largest`);
    }
}
else if(num2>num1&num2>num3)
{
    console.log(`${num2} is largest numbr`); //num1 laar
    if(num1>num3)//to find scnd lar
    {
        console.log(`${num1} is second largest`);
        console.log(`${num3} is third largest`);
    }
    else
    {
        console.log(`${num3} is secnd lar`);
        console.log(`${num1} is third largest`);
    }
}
else if(num3>num1&num3>num2)
{
    console.log(`${num3} is largest numbr`); //num1 laar
    if(num1>num2)//to find scnd lar
    {
        console.log(`${num1} is second largest`);
        console.log(`${num2} is third largest`);
        
    }
    else
    {
        console.log(`${num2} is secnd lar`);
        console.log(`${num1} is third largest`);
    }
}
