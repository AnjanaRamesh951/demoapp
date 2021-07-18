var expenses=[20000,25000,30000,27000,30000,30000]
// expenses[1]=30000;
// console.log(expenses);
// for(let i=0;i<=expenses.length;i++)
// {
//     console.log(expenses[i]);
// }
// expenses[3]+=3000;
// console.log(expenses);
// for(let amount of expenses){

//     console.log(amount);
// }
for(let exp of expenses){
    if(exp>25000){
        console.log(exp);
    }
}
