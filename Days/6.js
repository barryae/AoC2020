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
    let sum =0;
    let answers = [];
    data.forEach(line=>{
        if(line!=""){
            for(let i=0;i<line.length;i++){
                if (!answers.includes(line[i])){
                     answers.push(line[i])
                }
            }
            return
        }

        sum+=answers.length
        answers = []
    })
    return sum;
};

function partTwo(data){
    let sum =0;
    let members = 0;
    let dict = {};
    data.forEach(line=>{
        if(line!=""){
            members++
            for(let i=0;i<line.length;i++){
                let stored = dict[line[i]]
                if (!stored){
                     stored = 1
                }else{
                    stored++
                }
            }
            return
        }  
       
        Object.keys(dict).forEach(ans=>{
            if (dict[ans]===members){
                sum++
            }
        })
        dict={};
        members = 0;

    })
    return sum;
};

module.exports = {
    main,
    partOne,
    partTwo
};