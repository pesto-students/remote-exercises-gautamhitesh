function foo(a){
    var b= a+2;
    function bar(c){
        console.log(a,b,c)
    }
    bar(b*2);
}

foo(3);
// 3-->foo --> b=5,a=3,c=10

function foo1(a){
    var a=2;
    function bar1(){
        console.log(a);
    }
    return bar1;
}
var baz=foo1();
baz();



