'use-strict';

// let randInt = require('random - int');

const randomInt = (bottom, top) => {
    if(!top) top = 6;
    return Math.floor((Math.random() * +top) + bottom)
}

module.exports = {randomInt}