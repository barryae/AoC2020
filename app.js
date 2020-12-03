const {days} = require('./Utils/daysLoader')

const dayArg = process.argv[1]

function day(){
    const defaultDay = days.length-1;
    let day = defaultDay;
    let dayIndex = null;
    if(dayArg != undefined){
        day = dayArg
        dayIndex = day-1;
    }else{
        dayIndex = defaultDay
    } 
    if(!days[dayIndex]){throw new Error(`No main function found in day ${day}`)}
    console.log(days[dayIndex].main(day),"\n")
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