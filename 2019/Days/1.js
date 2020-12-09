const utils = require('../Utils');

function main (day) {
    // Save input.txt in Input folder with input<dayNumber>.txt format
    const data = utils.parseData(day).split('\n');
    
    return (
`
${partOne.name}: ${partOne(data)}
${partTwo.name}: ${partTwo(data)}
`
    );
};

function partOne(data){ 

    const sum = data
    .map(mass=>{return Math.floor(Number.parseInt(mass)/3)-2})
    .reduce((acc,curr)=>{return acc+curr},0);

    return sum
};

function partTwo(data){
    let sum = 0;
    data.forEach(mass=>{
        currFuel = Math.floor(Number.parseInt(mass)/3)-2;
        while(currFuel>0){
            sum+= currFuel;
            currFuel = Math.floor(Number.parseInt(currFuel)/3)-2;
        }
         
    })
    return sum
};

module.exports = {
    main,
    partOne,
    partTwo
};