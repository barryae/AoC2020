const utils = require('../Utils');

function main (day) {
    // Save input.txt in Input folder with input<dayNumber>.txt format
    const data = utils.parseData(day).split('\n');
    
    return (
`
${partOne.name}: ${partOne(data)}
${partTwo.name}: ${partTwo(data)}
`
    );
};

function partOne(data){ 
    let bags =[]
    let toSearch = ["shiny gold"]
    while(toSearch.length>0){
        toSearch = searchOne(data,toSearch)
        toSearch.forEach(bag=>{if(bags.indexOf(bag)===-1)bags.push(bag)})
    }
    
    return bags.length;
};

function searchOne(data,bags){
     let currBags = []
        data.forEach(rule=>{
            let split = rule.split(" ")
            bags.forEach(bag=>{
                if(rule.includes(`${bag}`)&&((split[0]+" "+split[1])!=`${bag}`)) currBags.push(split[0]+" "+split[1])
            })
        })

    return currBags
}

function partTwo(data){
    // Rules dictionary
    let rules = {};
    
    // Start with shiny gold bag
    let bagsLeft = 1;
    let toSearch = ["shiny gold"]
    let finalCount = 0;

    // while loop that iterates as long as there are bags left
    while(bagsLeft>0){
        let newBags = [];
        let currCount = 0;
        toSearch.forEach(bag=>{
          
            if (!rules[bag]) {
                data.forEach(line=>{
                    let words = line.split(' ')
                    if (words[0]+" "+words[1]===bag){
                        let split = line.split(" contain ")
                        rules[bag]=split[1]
                    }
                })
            }

            let rule = rules[bag]
            let insideBags = rule.includes(', ')?rule.split(', '):[rule]
            insideBags.forEach(currbag=>{
                let words = currbag.split(' ')
                let bagNam = words[1]+" "+words[2]
                let num = words[0]
                if(num==="no"){
                    num=0
                }
                for(let i=0;i<num;i++){newBags.push(bagNam)}
                currCount+=Number.parseInt(num)
            })
            
        })
        bagsLeft = currCount;
        toSearch = newBags;
        finalCount += currCount;
    }
    return finalCount;
};

module.exports = {
    main,
    partOne,
    partTwo
};