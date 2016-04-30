
var a1=0,a2=0,a3=0;
for(var i=0;i++;i<2){
    a1=i;
    (setTimeout(function(){
        a2=i++;
        a3=i;
        console.log(a1,a2,a3);
    },1000))();
    console.log(a1,a2,a3);
}
console.log(a1,a2,a3);