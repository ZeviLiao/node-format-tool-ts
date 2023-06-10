"use strict";
var fs = require('fs');
var path = require("path");
var result = fs.readFileSync(path.resolve(__dirname, "../data/example.txt"), {
    encoding: 'utf-8',
});
console.log(result);
