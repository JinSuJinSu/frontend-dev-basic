module.exports = {
    PI:3.14,
    
    sum : function(){
        let sum=0;
        Array.from(arguments).forEach(x=>sum+=x);
        return sum;
    },

    max : function(){
        let max=Number.MIN_SAFE_INTEGER;
        Array.from(arguments).forEach(x=> max = x>max ? x:max);
        return max;
    },

    min : function(){
        let min=Number.MAX_SAFE_INTEGER
        Array.from(arguments).forEach(x=> min = x<min ? x:min);
        return min;
    },
}