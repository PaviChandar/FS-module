const fs = require('fs');

// fs.readFile('./filepaths/pathtext.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });
    
// synchronous function
try{
   const data = fs.readFileSync('./filepaths/pathtext.txt','utf8');
   console.log(data);
} catch(err) {
    console.error(err);
}


