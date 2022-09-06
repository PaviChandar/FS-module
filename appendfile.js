const fs = require("fs")

const content = '\n This is appended file.'

fs.appendFile('file.txt', content, err => {
    if(err) {
        console.error(err);
    }
});