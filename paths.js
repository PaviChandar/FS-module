const path = require('path');

const newpath = './filepaths/pathtext.txt'

console.log(path.dirname(newpath));
console.log(path.basename(newpath));
console.log(path.extname(newpath));
console.log(path.basename(newpath, path.extname(newpath))); 

//path methods
const name = 'pavi';
console.log(path.join('/','filepaths', name, 'paths.txt'));
console.log(path.resolve('pavi.txt'));
console.log(path.normalize('/paths/pavi/..//pathtext.txt'));