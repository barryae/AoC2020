const utils = require('../Utils');

const numbers = utils.parseData(1);

function main (data=numbers) {
    return `${sumTwo.name}: ${sumTwo(data)}\n${sumThree.name}: ${sumThree(data)}`
};

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

module.exports = {
    main,
    sumTwo,
    sumThree
}