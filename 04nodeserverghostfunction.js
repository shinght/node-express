// import http package from node runtime
let httpRef = require('http')

// server has to deal with request and response as parameters
// request is incoming and response is outgoing

// Use httpRef variable to create a server
// use createServer to create the new http server
// createServer will use ghost/anonymous callback function to implement the server

// myCallBackFunction is a function
let myfirstServer = httpRef.createServer(function(request, response){
    console.log("Request received")
    response.writeHead(200, {"Content-Type": "text/html"})
    response.write("<h1>Hello from node server. My very first server!</h1>")
    response.write("<h2>I can send multiple responses ONLY before end.</h2>")
    response.write("<h2>I am ghost/anonymous function.</h2>")
    console.log("Response being sent");
    response.end()
})


const PORT = 4000
// configure the port for the server to listen to the request
myfirstServer.listen(PORT)

// use control + c to stop the server