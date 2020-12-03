const utils = require('../Utils')

function main () {
    const data = utils.parseData(3);
    const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]]
    return `Part One: ${countTrees(data,slopes[1])}\nPart Two: ${countTrees(data,slopes)}`
};

function countTrees(data,slopes){
    let answer = 1

    // If single slope is given, wrap in array
    if(slopes[0][0]==undefined){slopes=[slopes]}

    slopes.forEach((slope)=>{
        let row = 0;
        let column = 0;
        let count = 0;
        while(row<data.length){
            if(column>=data[0].length){
                column = column%data[0].length
            }
            if(data[row][column]==='#'){count++}
            row+=slope[1]
            column+=slope[0]
        }
        answer *= count;
    })
    return answer;
}

module.exports = {
    main,
    countTrees
}