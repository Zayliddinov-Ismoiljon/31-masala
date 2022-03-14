var a=["salom", 345, 123, "olma", "dunyo", 125363,];
var b=[];
for(i=0; i<=a.length; i++){
    b.push(a);
}

a.forEach(function(param){
    if(typeof param===`string`)
    console.log(param);
})