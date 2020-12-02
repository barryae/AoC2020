const fs = require('fs');

let valid = 0;
const rules = fs.readFileSync('./Input/input2.txt').toString('utf8').split('\n');
rules.forEach(rule=>{
    const splitRule = rule.split(' ');
    const minMax = splitRule[0].split('-')
    const min = Number.parseInt(minMax[0]);
    const max = Number.parseInt(minMax[1]);
    const letter = splitRule[1][0]
    const password = splitRule[2]
    count(letter,min,max,password)
})

function count (letter, min, max, password){
    const letterArr = password.split('').filter(char=>{return char===letter})
    console.log(letterArr)
    const count = letterArr.length
    if(count>=min&&count<=max){
        valid++
    }
}

return valid;