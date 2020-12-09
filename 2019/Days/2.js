const utils = require('../Utils');

function main (day) {
    // Save input.txt in Input folder with input<dayNumber>.txt format
    const data = utils.parseData(day).split(',').map(num=>{return Number.parseInt(num)});
    
    return (
`
${intCode.name}: ${intCode(data,12,2)}
${partTwo.name}: ${partTwo(data)}
`
    );
};

function intCode(data, noun, verb){ 
    [data[1],data[2]]=[noun,verb];
    i=0;
    let terminate = false;
    while(!terminate&&(i<data.length)){
        let cmd = data[i];
        switch(cmd){
            case 1:
                data[data[i+3]] = data[data[i+1]]+data[data[i+2]]
                i+=4
                break
            case 2:
                data[data[i+3]] = data[data[i+1]]*data[data[i+2]]
                i+=4
                break
            case 99:
                terminate=true;
                break
        }
    }
    return data[0];
};

function partTwo(data){
    let combos = []
    for(let i=0;i<100;i++){
        let noun = i;
        for(let j=0; j<100; j++){
            let verb =j;
            combos.push([noun,verb])
        }
    }
    // console.log(combos)
    // console.log(intCode(data,combos[0][0],combos[0][1]))
    // combos.forEach(combo=>{
        
    //     if(intCode(data,combo[0],combo[1])===19690720){
    //         return 100*combo[0]*combo[1]
    //     }
    // })
};

module.exports = {
    main,
    intCode,
    partTwo
};