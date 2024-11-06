// const fs = require("fs");
// const http = require("http");
// const PORT = 2563;
// const user = "Alfaiz";
// const timeStamp = new Date().toLocaleString();

// const server = http.createServer((req, res) => {
//     if(req.url == "/home" && req.method == "GET"){
//         res.end("Hello from Home");
//     }else if(req.url == "/about" && req.method == "GET"){
//         fs.writeFileSync("log.txt", `${user} visited ${req.url} at ${timeStamp} \n`);
//         res.end("Hello from About")
//     }else if(req.url == "/about" && req.method == "POST"){
//         fs.writeFileSync("log.txt", `${user} visited ${req.url} at ${timeStamp} \n`);
//         res.end("New User Created!");
//     }else if(req.url == "/users"){
//         fs.writeFileSync("log.txt", `${user} visited ${req.url} at ${timeStamp} \n`);
//         res.end("Hello from users");
//     }else{
//         fs.writeFileSync("log.txt", `${user} visited ${req.url} at ${timeStamp} \n`);
//         res.end("Hello from the Server");
//     }
// })

// server.listen(PORT, (err) => {
//     if(!err){
//         console.log("Server is live!");
//     }else{
//         console.log("enoucntered with an error ", err);
//     }
// })


const fs = require("fs");
const http = require("http");
const PORT = 2563;
const user = "Alfaiz";

const server = http.createServer((req, res) => {
    const timeStamp = new Date().toLocaleString();

    if (req.url !== "/favicon.ico") {
        const logMessage = `${user} visited ${req.url} at ${timeStamp}\n`;

        fs.appendFileSync("log.txt", logMessage);
    }

    if (req.url === "/home" && req.method === "GET") {
        res.end("Hello from Home");
    } else if (req.url === "/about" && req.method === "GET") {
        res.end("Hello from About");
    } else if (req.url === "/about" && req.method === "POST") {
        res.end("New User Created!");
    } else if (req.url === "/users") {
        const data = fs.readFileSync("log.txt", "utf8");
        console.log(data);
        
        res.end("Hello from Users");
        
    } else {
        res.end("Hello from the Server");
    }
});

server.listen(PORT, (err) => {
    if (!err) {
        console.log("Server is live!");
    } else {
        console.log("Encountered an error:", err);
    }
});
