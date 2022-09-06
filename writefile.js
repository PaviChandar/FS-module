const fs = require('fs')

// const content = "Hi! I am Aspirian."
const content = "Hi! I am Aspirian and I am proud."
// fs.writeFile('file.txt',content, err => {
//     if(err) {
//         console.error(err);
//     } else {
//         console.log(content);
//     }
// });

try{
    fs.writeFileSync('file.txt',content);
    // console.log(content)
} catch(err) {
    console.log(err)

    
}