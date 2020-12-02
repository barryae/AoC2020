const utils = require('./Utils')

console.log(countValidPw());

function countValidPw(){

    let answerOne = 0;
    let answerTwo = 0;
    const rules = utils.parseData(2);

    rules.forEach(rule=>{
        const splitRule = rule.split(' ');
        const minMax = splitRule[0].split('-');
        const min = Number.parseInt(minMax[0]);
        const max = Number.parseInt(minMax[1]);
        const letter = splitRule[1][0];
        const password = splitRule[2];
        count(letter,min,max,password);
        checkChar(letter,min,max,password);
    })

    return `${count.name}: ${answerOne}\n${checkChar.name}: ${answerTwo}`

    function count (letter, min, max, password){
        const letterArr = password.split('').filter(char=>{return char===letter});
        const count = letterArr.length;
        if(count>=min&&count<=max){
            answerOne++;
        };
    };
    
    function checkChar(letter, min, max, password){
        if(password[min-1]===letter&&password[max-1]===letter){
            return
        };
        if(password[min-1]===letter||password[max-1]===letter){
            answerTwo++;
        };
    };

};

