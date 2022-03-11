/**
 * named export
 * exports(require.js)와 유사하다. 이 모듈을 import 할때는 Destructing이 가능하다.
 */

export const add = function(a,b){
    return a+b;
}

export const subtract = function(a,b){
    return a-b;
}