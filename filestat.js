const { constants } = require('buffer');
const fs = require('fs');

fs.stat('file.txt', (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    console.log('true')
  }
  console.log(stats.isFile());
  console.log(stats.size);
  // we have access to the file stats in `stats`


});