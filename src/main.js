const { hello, getSecret } = require('./lib');

document.getElementById('h1').innerText = hello(`world. We are in ${ getSecret('ENV') }`);
document.getElementById('secret').innerText = getSecret('SECRET');
document.getElementById('param').innerText = getSecret('PARAM');
