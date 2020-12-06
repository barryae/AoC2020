const utils = require('../Utils')

function main (day) {
    let data = utils.parse4(day);
    return (
`
${partOne.name}: ${partOne(data)}
${partTwo.name}: ${partTwo(data)}
`
    );
};

function partOne(data){ 
    let i = 0;
    let validCount = 0;
    
    while(data[i]!=undefined){
        let hasCid = false;
        let count =0;
        while(data[i]!="" && data[i]!=undefined){
            let line = data[i].split(" ")
            line.forEach(part=>{part.split(" ").forEach(field=>{if(field[0]=="c"){hasCid=true}})})
            count+=data[i].split(" ").length;
            i++
        }
        if(count===8 || (count===7 && hasCid===false)){validCount++}
        i++
    }
    return validCount;
}

function partTwo(data){
    let i = 0;
    let validCount = 0;
    
    while(data[i]!=undefined){
        let hasCid = false;
        let count =0;
        let isValid = true;
        while(data[i]!="" && data[i]!=undefined){
            let line = data[i].split(" ")
            line.forEach(part=>{part.split(" ").forEach(field=>{
                let value = field.split(":")[1]
                if(field[0]=="b"){
                    if(!(Number.parseInt(value)>=1920&&Number.parseInt(value)<=2002)&&(value.length===4)){
                        isValid=false
                    }
                }
                if(field[0]=="i"){
                    if(!(Number.parseInt(value)>=2010&&Number.parseInt(value)<=2020)&&(value.length===4)){
                        isValid=false
                    }
                }
                if(field[0]=="e"){
                    if(!(Number.parseInt(value)>=2020&&Number.parseInt(value)<=2030)&&(value.length===4)){
                        isValid=false
                    }
                }
                if(field[0]=="h"&&field[1]=="g"){
                    if(value[value.length-1]==="m"&&!(Number.parseInt(value)>=150&&Number.parseInt(value)<=193)){
                            isValid=false
                    }
                    if(value[value.length-1]==="n"&&!(Number.parseInt(value)>=59&&Number.parseInt(value)<=76)){
                        isValid=false
                    }
                    if(!(value[value.length-1]==="n"||value[value.length-1]==="m")){
                        isValid=false
                    }
                }
                if(field[0]=="h"&&field[1]=="c"){
                    let curr = value.split("#")
                    let haveHash = curr.length>1
                    let notBadChar =checkLetters(curr[curr.length-1])
                    let rightLength = curr[curr.length-1].length===6
                    if(!(haveHash&&notBadChar&&rightLength)){
                        isValid=false
                    }
                }
                if(field[0]=="e"&&field[1]=="c"){
                    if(!checkColor(value)){
                        isValid=false
                    }
                }
                if(field[0]=="p"){
                    if(!(value.length===9)){
                        isValid=false
                    }
                }
                if(field[0]=="c"){hasCid=true}
            })})
            count+=data[i].split(" ").length;
            i++
        }
        if((count===8 && isValid) || (count===7 && hasCid===false && isValid)){validCount++}
        isValid = true;
        i++
    }

    return validCount;
}

function checkLetters(string){
    var substrings = "ghijklmnopqrstuvwxwz".split('')
    let length = substrings.length;
    while(length--) {
        if (string.indexOf(substrings[length])!=-1) {
            return false
        }
    }
    return true
}

function checkColor(string){
    var substrings = "amb blu brn gry grn hzl oth".split(' ')
    let length = substrings.length;
    let count = 0;
    while(length--) {
        if (string.indexOf(substrings[length])!=-1) {
            count++
        }
    }
    if(count===1){return true}
    return false
}

module.exports = {
    main,
    partOne,
    partTwo
};