const fs = require('fs')

// const data = fs.readFileSync('./file.txt','utf8');
// console.log(data);

//async file read

fs.readFile('./file.txt', 'utf8', (error, data) => {
    if(error) {
        return console.log(error);
    }
    console.log(data);
});

console.log('Completed')