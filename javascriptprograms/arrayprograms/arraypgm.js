//print all even numbers
// var arr=[10,11,12,13,14,15,16]
// //push
// // arr.push(100)
// arr.pop()
// console.log(arr);

















//even
// for(let num of arr){
//     if(num%2==0){
//         console.log(num);
//     }
// }


//total sum of array

// var sum=0;
// for(let num of arr){
//     sum+=num
// }
// console.log(sum);


//create oodd &even array
var arr=[10,11,12,13,14,15,16]
var odd=[],even=[];
for(let num of arr){
    if(num%2==0){
        even.push(num)
    }
    else{
        odd.push(num)
    }
}
console.log("odd array",odd);
console.log("even array",even);