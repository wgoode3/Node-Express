const express = require("express"),
         port = 8000,
          app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));

app.get("/", function(req, res) {
    res.json({"msg": "hey this works"});
});

app.get("/cats", function(req, res) {
    res.sendFile(__dirname + "/templates/index.html");
});

app.get("/dogs", function(req, res) {
    let foods = ["pizza", "pasta", 'perogi', "panini"];
    res.render("index", {foods});
});

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});












// const http = require("http"),
//         fs = require("fs"),
//       port = 8000;

// const server = http.Server(function(req, res) {
//     console.log(req.url);

//     if(req.url === "/") {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write("<h1>ALMOST MAX POWER</h1><progress min=0 max=100 value=95 />");
//         res.end();
//     } else if(req.url === "/cats"){
//         fs.readFile(__dirname + "/templates/index.html", "utf8", function(err, data) {
//             console.log(data);
//             res.writeHead(200, {'Content-Type': 'text/html'});
//             res.write(data);
//             res.end();
//         })
//     } else if(req.url.endsWith(".jpeg")) {
//         fs.readFile(__dirname + req.url, function(err, data) {
//             res.writeHead(200, {'Content-Type': 'image/*'});
//             res.write(data);
//             res.end();
//         })
//     } else {
//         res.writeHead(404, {'Content-Type': 'text/html'});
//         res.end(`<h1>Not Found</h1><hr><pre>Cannot find: ${req.url}</pre>`);
//     }

// });

// server.listen(port, function() {
//     console.log(`Listening on port ${port}`);
// });