const fs = require ('fs')

const numbers = fs.readFileSync('./Input/input1.txt').toString('utf8').split('\n');

for(let i=0;i<numbers.length;i++){

    const currNum = Number.parseInt(numbers[i]);

    for(let j=0;j<numbers.length;j++){

        const nextNum = Number.parseInt(numbers[j]);

        for(let k=0;k<numbers.length;k++){

            const nexterNum = Number.parseInt(numbers[k]);
            const sum = currNum+nextNum+nexterNum
            if ( sum === 2020){
                console.log(currNum,nextNum,nexterNum)
                console.log(currNum*nextNum*nexterNum)
                return
            }

        }
        

    }
}

