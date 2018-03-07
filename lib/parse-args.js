'use-strict';

// redefines exports as this function
module.exports = ([num, sides]) => {
    const dieNums = {};
    // count checks if sides is defined, 
    // if so count = num. If not, count = 1
    dieNums.count = sides ? num : 1;
    // sides checks to see if sides exists, 
    // if so sides = sides; 
    // if not sides = num, 
    // if not num sides = 6
    dieNums.sides = sides || num || 6;

    return dieNums
}