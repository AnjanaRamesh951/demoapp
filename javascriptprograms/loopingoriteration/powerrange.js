var num=3;
var low=8;
var upp=30;
// 9 16 25
//1**2=1 2**2=4 3**2=9 4**2=16 5**2=25
//8 27
//1**3=1 2**3=8
for(let i=1;i<=upp;i++){
    let res=i**num;
    if(low<=res<=upp){
        console.log(res);
    }
}