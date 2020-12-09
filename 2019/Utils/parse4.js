const fs = require ('fs')

const parse4 = (day)=>{
    return fs.readFileSync(`./Inputs/input${day}.txt`).toString('utf8').split('\n');
}

module.exports = parse4;