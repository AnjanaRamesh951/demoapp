var arr=[1,2,3,4]
var elem=6;
for(let num1 of arr){
    for(let num2 of arr){
        let total=num1+num2;
        if(elem==total){
            console.log('pairs are num1 ${num1} ${num2}');
        }
    }
}