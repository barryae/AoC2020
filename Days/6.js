const utils = require('../Utils');

function main (day) {
    // Save input.txt in Input folder with input<dayNumber>.txt format
    const data = utils.parseData(day);
    
    return (
`
${partOne.name}: ${partOne(data)}
${partTwo.name}: ${partTwo(data)}
`
    );
};

function partOne(data){ 
    return;
};

function partTwo(data){
    return;
};

module.exports = {
    main,
    partOne,
    partTwo
};