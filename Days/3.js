const utils = require('../Utils')

function main () {
    const data = utils.parseData(3);
    const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]]
    return `${oneSlope.name}: ${oneSlope(data,slopes[1])}\n${manySlopes.name}: ${manySlopes(data,slopes)}`
};

function oneSlope(data,slope){ 
    let row = 0;
    let column = 0;
    let count = 0;

    while(row<data.length){
        if(column>data[0].length-1){
            column = column%data[0].length
        }
        if(data[row][column]==='#'){count++}
        row+=slope[1]
        column+=slope[0]
    }

    return count;
}

function manySlopes(data){
    const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]]
    let count = 1

    slopes.forEach((slope)=>{
        let row = 0;
        let column = 0;
        let curr = 0;
        while(row<data.length){
            if(column>data[0].length-1){
                column = column%data[0].length
            }
            if(data[row][column]==='#'){curr++}
            row+=slope[1]
            column+=slope[0]
        }
        count *= curr;
    })

    return count;
}

module.exports = {
    main,
    oneSlope,
    manySlopes
}