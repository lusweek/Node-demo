const http = require("http");
const path = require("path");
const fs = require("fs");

//writeHead är en statuskod
const server = http.createServer((req, res) => {
    //res.writeHead(200, {"content-Type": "text/html"})
    //res.end("<h1>Hej på dig !!</h1> ");
    //console.log(req.url)
  /*
    if(req.url === "/"){
        fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
            if (err) {
                throw err; 
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data)
        })
    }
    if(req.url === "/about"){
        fs.readFile(path.join(__dirname, "public", "about.html"), (err, data) => {
            if (err) {
                throw err; 
            }
            res.writeHead(200, {"Content-Type": "text/html"});
            res.end(data)
        })
    }

    //api endpoint example
    if(req.url === "/api/users"){
        const users = [
            {
                name: "Lukas",
                age: "23",
            },
            {
                name: "Martin",
                age: "22",
            },
        ];
        res.writeHead(200, {"Content-Type": "application.json"});
        res.end(JSON.stringify(users));
    }
});
*/
// Dynamic server

//dynamic filepath
let filepath = path.join(
    __dirname, "public", req.url === "/" ? "index.html" : `${req.url}.hmtl`
);

fs.readFile(filepath, (err, data) => {
    if (err) {
        if (err.code === "ENOENT") {
            fs.readFile(path.join(__dirname, "public", "404.html"), (err, data) => {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end(data, "utf8" /* utf8  är en valfri parameter */) 
            });
        }else{
            res.writeHead(500);
            res.end("Server Error"); 
        }
    } else {
    res.writeHead(200, {"Content-Type": "text/html" });
    res.end(data, "utf8");
    }
});
});


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Seerver is running on ${PORT}`));