const utils = require('../Utils')

function main () {
    data = utils.parseData(3);
    return `${partOne.name}: ${partOne(data)}\n${partTwo.name}: ${partTwo(data)}`
};

function partOne(data){ 
    let row = 0;
    let column = 0;
    let count = 0;

    while(row<data.length){
        if(column>data[0].length-1){
            column = column%data[0].length
        }
        if(data[row][column]==='#'){count++}
        row+=1
        column+=3
    }

    return count;
}

function partTwo(data){
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
        console.log(curr)
        count *= curr;
    })
    
    return count;
}

module.exports = {
    main,
    partOne,
    partTwo
}