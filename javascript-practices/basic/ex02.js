/* 변수와 데이터 타입
[기본타입]
- undefined
- string
- boolean

[객체] 
- object type
- function type
*/

console.log("-------------------- 기본 타입(privitive) ------------------------------------");
var u; // 선언과 정의의 구분이 없다.
var i=10;
var s="hello";
var b=true;

console.log("u:"+typeof(u));
console.log("i:"+typeof(i));
console.log("s:"+typeof(s));
console.log("b:"+typeof(b));

var a;

console.log(a);

console.log("-------------------- 객체 타입(object) ------------------------------------");
var i2 = new Number(1);
var s2 = new String("hello");
var b2 = new Boolean(false);
var o = new Object();
var a = new Array(); // 배열도 객체이다.

console.log("i2:"+typeof(i2));
console.log("s2:"+typeof(s2));
console.log("b2:"+typeof(b2));

console.log("-------------------- 함수 타입(function) ------------------------------------");

