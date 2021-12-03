const { v4: uuidv4 } = require('uuid');


const person = {
    id: uuidv4(),
    name: "Lukas",
    age: "23",
};

// Äldre verson 
module.exports = person;

//Kan även stå såhär, nyare syntax: 
// export default person; 