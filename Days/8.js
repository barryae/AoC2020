const utils = require('../Utils');

function main (day) {
    // Save input.txt in Input folder with input<dayNumber>.txt format
    const data = utils.parseData(day).split('\n');
    let rules = data.map((line,index)=>{
        let pars = line.split(' ')
        let obj = {
            id: index,
            cmd: pars[0],
            val: Number.parseInt(pars[1]),
            visited: false
        }
    
        return obj;
    })
    return (
`
${partOne.name}: ${partOne(data).acc}
${partTwo.name}: ${partTwo(data)}
`
    );
};

function partOne(data){ 

    let i = 0;
    let acc = 0;
    let visited =[]

    while(i<data.length&&!visited.includes(i)){
        const [cmd,val] = data[i].split(' ')
        visited.push(i);
        switch(cmd){
            case 'acc':
                acc+=Number.parseInt(val)
                i++
                break
            case 'jmp':
                i+=Number.parseInt(val)
                break
            case 'nop':
                i++
                break
        }
        
    }

    return {i,acc};
};

function partTwo(data){
    for(let i=0;i<data.length;i++){
        const [cmd,val] = data[i].split(' ');
        if(cmd!='acc'){
            data[i].includes('jmp')?data[i]=['nop',val].join(' '):data[i]=['jmp',val].join(' ')
            let result = partOne(data)
            data[i].includes('jmp')?data[i]=['nop',val].join(' '):data[i]=['jmp',val].join(' ')
            if(result.i===data.length){
                return result.acc
            }
        }
    }
};

module.exports = {
    main,
    partOne,
    partTwo
};