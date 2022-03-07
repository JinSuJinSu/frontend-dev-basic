let http = require('http');

let server = http.createServer(function(request,response){
    // 3. 콘솔화면에 로그 시작 부분을 출력
    console.log('--- log start ---');
    // url 생성
    let urlNew = new URL('http://localhost:8080/?let1=newData&let2=153&let3=testdata2017');
    console.log(urlNew);

    // 쿼리 문자열 생성
    let newSearchParams = new URLSearchParams(urlNew.searchParams);
    console.log(newSearchParams);
    // 6. 콘솔화면에 로그 종료 부분을 출력
    console.log('--- log end ---');

    response.writeHead(200, {'Content-Type':'text/html'});
    response.end('Hello node.js!!');
});