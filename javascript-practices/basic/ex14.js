console.log("=============global object=================");

global.name = '둘리';
console.log(name, global.name);


//cf
let ename = '둘리';
console.log(ename, global.ename);

console.log("========function의 객체 메소드 apply ================");
var f1 = function(){
    console.log(this);
}
f1();

// this 채우기
var o = {
    name:"마이클"
};
f1.apply(o);

console.log("========function의 객체 메소드 call ================");
var f2 = function(s1, s2){
    console.log(s1 +" " +s2 + " " + this.name);
};
f2('hi','');
f2.call(o, 'hi','again');
f2.apply(o, ['hi','again']);
