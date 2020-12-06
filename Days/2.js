const utils = require('../Utils')


function main(day){
    
    let answerOne = 0;
    let answerTwo = 0;
    let rules = utils.parseData(day).split("\n");

    rules.forEach(rule=>{
        const splitRule = rule.split(' ');
        const minMax = splitRule[0].split('-');
        const min = Number.parseInt(minMax[0]);
        const max = Number.parseInt(minMax[1]);
        const letter = splitRule[1][0];
        const password = splitRule[2];
        if(count(letter,min,max,password)){answerOne++};
        if(checkChar(letter,min,max,password)){answerTwo++};
    })

    return `${count.name}: ${answerOne}\n${checkChar.name}: ${answerTwo}`
};

// Returns true if letter occurs within limits in password
function count (letter, min, max, password){
    const letterArr = password.split('').filter(char=>{return char===letter});
    const count = letterArr.length;
    if(count>=min&&count<=max){
        return true;
    };
};

// Returns true if letter occurs in either min or max space but not both
function checkChar(letter, min, max, password){
    if(password[min-1]===letter&&password[max-1]===letter){
        return false
    };
    if(password[min-1]===letter||password[max-1]===letter){
        return true;
    };
};

module.exports = {
    main,
    count,
    checkChar
}