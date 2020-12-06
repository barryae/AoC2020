const fs = require ('fs')

const parseData = (day)=>{
    return fs.readFileSync(`./Inputs/input${day}.txt`).toString('utf8')
}

module.exports = parseData;