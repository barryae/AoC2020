const fs = require ('fs')

const parseData = (day)=>{
    return fs.readFileSync(`./Inputs/input${day}.txt`).toString('utf8').split('\n');
}

module.exports = parseData;