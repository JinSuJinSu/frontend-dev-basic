/**
 * exports 뒤에 이름을 사용해서 export 한다(named export)
 * 표준에 제일 맞는 모듈 require 방법이다.
 */

exports.PI = 3.14;

exports.sum = function(){
        let sum=0;
        Array.from(arguments).forEach(x=>sum+=x);
        return sum;
}

exports.max = function(){
    let max=Number.MIN_SAFE_INTEGER;
    Array.from(arguments).forEach(x=> max = x>max ? x:max);
    return max;
}

exports.min = function(){
    let min=Number.MAX_SAFE_INTEGER
    Array.from(arguments).forEach(x=> min = x<min ? x:min);
    return min;
}
