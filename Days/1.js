const { lookup } = require('dns');
const utils = require('../Utils');


function main (day) {
    let numbers = utils.parseData(day).split("\n");
    return `${sumTwo.name}: ${sumTwo(numbers)}\n${sumThree.name}: ${sumThree(numbers)}`
};

/** 
 * Finds two numbers that sum to equal 2020 and returns their product
 * @param numbers Array of strings of numbers
 * */ 
function sumTwo(numbers){

    for(let i=0;i<numbers.length;i++){

        const currNum = Number.parseInt(numbers[i]);
    
        for(let j=0;j<numbers.length;j++){
    
            const nextNum = Number.parseInt(numbers[j]);
            const sum = currNum+nextNum;

                if ( sum === 2020){
                    const answer = currNum*nextNum;
                    return answer
                };     
    
        };
    };
};

/**
 * Finds three numbers that sum to equal 2020 and returns their product
 * @param numbers Array of strings of numbers
 */ 
function sumThree(numbers){

    for(let i=0;i<numbers.length;i++){

        const currNum = Number.parseInt(numbers[i]);
    
        for(let j=0;j<numbers.length;j++){
    
            const nextNum = Number.parseInt(numbers[j]);
    
            for(let k=0;k<numbers.length;k++){
    
                const nexterNum = Number.parseInt(numbers[k]);
                const sum = currNum+nextNum+nexterNum;
    
                if ( sum === 2020){
                    const answer = currNum*nextNum*nexterNum;
                    return answer
                };
    
            };
            
        };
    };
};

function sumAny(numbers, times) {
    const maxIter = times;
    let currIter = 0;
    let nums = []
    let firstNum;
    let secNum;
    let thirdNum;

    while(currIter<maxIter){
        nums[currIter]=loop()
    }

    loop();

    const loop = () => {
        for(let i=0;i<numbers.length;i++){
            nums[currIter] = numbers[i]
            loop();
        };
        if(sum(nums)===2020){return nums.reduce((a,b)=>{a*b},1)}
        currIter++;
    }

}

module.exports = {
    main,
    sumTwo,
    sumThree
}