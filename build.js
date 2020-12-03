require('dotenv').config();
const browserify = require('browserify');
const envify = require('envify/custom');
const fs = require('fs');
const input = browserify('./src/main.js');
const output = fs.createWriteStream('./dist/bundle.js');

console.log('Iniciando bundle');

input.transform(envify({
    NODE_ENV: process.env.NODE_ENV,
    SECRET: process.env.SECRET,
    PARAM: process.env.PARAM,
}));

input.bundle().pipe(output);
console.log('Terminado');
