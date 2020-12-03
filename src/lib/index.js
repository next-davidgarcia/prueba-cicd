const secrets = require('../secrets.js');


module.exports.hello = (who) => {
    return `Hello ${ who }`;
};

module.exports.getSecret = (key) => {
    return secrets[key] || 'Not found';
};
