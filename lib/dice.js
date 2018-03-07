'use-strict';

const { randomInt } = require("./math")

module.exports.roll = (diceNotation) => {
    let [rollCount, sides] = diceNotation.split("d");
    let diceTotal = 0;

    for (let i = 0; i < rollCount; i++) {
        diceTotal += randomInt(1, sides);
        
    }
    return diceTotal
}

module.exports.toDiceNotation = ({count, sides}) => `${count}d${sides}`;