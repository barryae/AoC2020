const fs = require ('fs')

module.exports = (day)=>{
    return fs.readFileSync(`./Input/input${day}.txt`).toString('utf8').split('\n');
}
