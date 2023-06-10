const fs = require('fs');
const path = require("path");

const result = fs.readFileSync(
  path.resolve(__dirname, "../data/example.txt"), {
  encoding: 'utf-8',
});
console.log(result);