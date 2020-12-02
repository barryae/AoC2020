const {days} = require('./daysLoader')

const dayArg = process.argv[1]

function day(){
    dayArg != undefined ? 
    console.log(days[dayArg-1].main(),"\n")
    :
    console.log(days[days.length-1].main(),"\n")
}

function today(){
    console.log(days[days.length-1].main(),"\n")
}

function all(){
    for (let i = 0; i < days.length; i++) {
        console.log(days[i].main(),"\n")
        
    }
}

module.exports = {
    day,
    today,
    all,
}