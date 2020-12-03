const {days} = require('./Utils/daysLoader')

const argInt = Number.parseInt(process.argv[1])

// Checks if arg is int and is within day range, or defaults to last day
const dayArg = argInt && argInt<=days.length && process.argv[1]||days.length;

function day(){
    let dayIndex = null;

    dayIndex = dayArg-1;

    console.log(days[dayIndex].main(dayArg),"\n")
}

function today(){
    console.log(days[days.length-1].main(),"\n")
}

function all(){
    for (let i = 0; i < days.length; i++) {
        console.log(`Day ${i+1}\n${days[i].main()}\n`)  
    }
}

module.exports = {
    day,
    today,
    all,
}