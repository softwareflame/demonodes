const http=require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>This is basic server</h1>");
    resp.end();
}).listen(4500);