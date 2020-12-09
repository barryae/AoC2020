const utils = require('../Utils');

function main (day) {
    // Save input.txt in Input folder with input<dayNumber>.txt format
    const data = utils.parseData(day).split('\n').map(num=>{return Number.parseInt(num)});
    
    return (
`
${partOne.name}: ${partOne(data,25)}
${partTwo.name}: ${partTwo(partOne(data,25), data)}
`
    );
};

function partOne(data,preamble){ 

    let lo = 0;
    let hi = preamble-1;
    let curr = hi+1;
    let isValid = false;
    
    while(curr<data.length){
        isValid = false;
        for(let i=lo;i<=hi;i++){
            for(let j=lo;j<=hi;j++){
                if((data[curr]===(data[i]+data[j]))&&(i!=j)) {
                    isValid = true
                }
            }
        }

        if(!isValid){return data[curr]}
        lo++
        hi++
        curr++
    }
};

function partTwo(num,data){

    for(let i=0;i<data.length-1;i++) {
        
        for(let j=i+1;j<data.length;j++){

            let slice = data.slice(i,j)

            let numB = slice.reduce((acc,num)=>{
                return acc+num
            },0)

            if(numB===num){
                slice.sort((a,b)=>b-a)
                return slice[0]+slice[slice.length-1]
            }

        }
    }


    return ;
};

module.exports = {
    main,
    partOne,
    partTwo
};