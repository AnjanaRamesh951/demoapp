var  low=21,upp=40;//23,29,31,37
for(let num=low;num<=upp;num++){ //num=21.....40
    //num=22;
    let flag=0;
    for(let j=2;j<num;j++){
        if(num%j==0){
            flag++;
            break;
        }
    }
    if(flag==0)
    {
        console.log(num);
    }
}