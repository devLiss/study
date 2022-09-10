
const http = require('http')
const fs = require('fs')
var path = require('path')

let requestsCount = 0


var _favicon = path.join(__dirname, '', 'favicon.ico')
const server = http.createServer((request,response)=>{
        if (request.url === '/favicon.ico') {
            response.setHeader('Content-Type', 'image/x-icon');
            fs.createReadStream(_favicon).pipe(response);
            return
        }
        requestsCount++
        switch(request.url){
            case '/students' :
                response.write(" Students ")
                break;
            case '/':
            case '/courses' :
                response.write("FRONT + BACK")
                break;
            default:
                response.write("404 NOT FOUND")
        }
        //response.statusCode = 404

        response.write(" Requests count "+ requestsCount)
        response.end()
})
//server.use(favicon(__dirname + '/favicon.png'));
server.listen(3003)
