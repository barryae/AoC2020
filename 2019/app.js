const {days} = require('./Utils/daysLoader')

function day(){
    const argInt = Number.parseInt(process.argv[1])

    // Checks if arg is int and is within day range, or defaults to last day
    const dayArg = argInt && argInt<=days.length && process.argv[1]||days.length;

    const dayIndex = dayArg-1;

    console.log(days[dayIndex].main(dayArg),"\n")
}

function today(){
    day();
}

function all(){
    for (let i = 0; i < days.length; i++) {
        console.log(`Day ${i+1}\n${days[i].main(i+1)}\n`)  
    }
}

module.exports = {
    day,
    today,
    all,
}