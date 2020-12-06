const utils = require('../Utils');
let IDs = [];
function main (day) {
    // Save input.txt in Input folder with input<dayNumber>.txt format
    const data = utils.parseData(day).split("\n");
    return (
`
${partOne.name}: ${partOne(data)}
${partTwo.name}: ${partTwo(IDs)}
`
    );
};

function partOne(data){ 
    let highId=0;
    
    data.forEach(binary=>{
        let rows = [0,127];
        let columns = [0,7];

        for(let i=0;i<7;i++){
            binary[i]==="F"?lower(rows):upper(rows)
        }
        for(let i=7;i<10;i++){
            binary[i]==="L"?lower(columns):upper(columns)
        }
        let seatId = rows[0] * 8 + columns[0];
        IDs.push(seatId);
        if(seatId>highId){
            highId=seatId
        }
    });
    return highId;
};

function partTwo(IDs){
    let seat;
    for(i=1;i<=126;i++){
        let row =i;
        for(let i=0; i<=7;i++){
            let col = i
            let minus = IDs.includes(row * 8 + col -1)
            let yours = !IDs.includes(row * 8 + col)
            let plus = IDs.includes(row * 8 + col +1)
            if(minus&&yours&&plus){seat=row * 8 + col}
        }
    }

    return seat;
};

function lower(coords){
   let half = Math.floor((coords[1]-coords[0])/2);
   coords[1]=(coords[0]+half)
    return coords
}

function upper(coords){
//upper
    let half = Math.ceil((coords[1]-coords[0])/2);
    coords[0]+=half
    return coords
}

module.exports = {
    main,
    partOne,
    partTwo
};