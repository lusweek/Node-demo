const person = require("./person")
const Car = require("./car")
const path = require("path")
const fs = require("fs");
const http = require("http")

// Äldre verson
//import person from "./person"

// console.log(person)

const volvo = new Car ("Volvo", "V60", "2018");
/*
console.log(volvo);
volvo.pressentaion(); 
*/

//--------------Node Core modules------------------//

//current file
//console.log(__filename)

//current direcort
//console.log(__dirname)

//-----------Path module---------------// 

// Basename - gets the file directory and file  
//console.log(path.basename(__filename));

//Dirname - get diretcory name
//console.log(path.dirname(__filename));

//Extention - gets the filetype
//console.log(path.extname(__filename));

//Parse - creates a path objecr from path
//console.log(path.parse(__filename));

//Join - sätter ihop paths (Viktigst) .join tar två argument. 
// De kommande argumenten bli vart man vill gå, blir såhär:
// dirname/test/hello.html
// dirname är alltså den mapp vi är inne i. 
//console.log(path.join(__dirname, "test", "hello.html" ))

//--------------------------Filesystem module methods-----------------//
// fs = FileSystem

// Create folder
//mkdr make director
/*
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
    if(err){
        throw err;
    }
    console.log("Folder created")
});
*/

//Create file and write to it
// writeFile Kör man den igen skriver den över texten.
/*
fs.writeFile(path.join(__dirname, "/test", "hello.txt"), "Hejsan hoppsan. Nu är du fin som satan", (err) => {
    if(err){
        throw err;
    }  
    console.log("File created")
});
*/

//Write to existing file
/*
fs.appendFile(
    path.join(__dirname, "/test", "hello.txt"),
 " \n Fin du är! ", 
 (err) => {
    if (err) {
        throw err;
    }
    console.log("File written to!")
    }
);
*/

//Read file  
/*
fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
    if (err) {
        throw err;
    } 
    console.log(data)
})
*/

//Rename file
//Notera att överstående kod targetar det gamla namnet på filen.
//Nu när jag byter namn kommer överstående kod ej kunna targeta 
//samma fil
/*
fs.rename( 
    path.join(__dirname, "/test", "hello-world.txt"),
    path.join(__dirname, "/test", "hello.txt"), (err) => {
    if (err) {
        throw err
    }
    console.log("File renamed!")
}  
);
*/

//------------------------Hppt module-----------------------------//

//Create server object
//listen tar två argument.
// 5000 är första argumentet
//andra är en callback function.
http.createServer((req, res) => {
    res.write("Hello from my first web server! Wohooo!!"); 
    res.end(); 
}).listen(5000, () => console.log("Server is up and running! "));

