// var for max num of logs before deleting
const log_limit_num = 10

// const key = parseInt(document.getElementById('dice-key').value);
//     const diceString = dice_pools[key];
//     if (!diceString) {
//         console.log("Invalid key");
//         return;
//     }

// update such that HML allows dropdown input for names so X can attack Y with stored object values

const dice_pools = {
1 : "1d2",
2 : "1d4",
3 : "2d2",
4 : "1d2+1d4",
5 : "2d4",
6 : "1d4+1d6",
7 : "3d4",
8 : "2d4+1d6",
9 : "1d4+2d6",
10 : "3d6",
11 : "2d6+1d8",
12 : "1d6+2d8",
13 : "3d8",
14 : "2d8+1d10",
15 : "1d8+2d10",
16 : "3d10",
17 : "2d10+1d12",
18 : "1d10+2d12",
19 : "3d12",
20 : "3d6+1d20"
}

const alice_data = {
    "name": "Alice",
    "acc":12, 
    "dam":6,
    "eva":12,
    "arm":2,
    "parry":1,
    "weaponHP":6,
    "maxHp":8,
    "currHp":8
}

const bob_data = {
    "name": "Bob",
    "acc":10, 
    "dam":10,
    "eva":9,
    "arm":2,
    "parry":3,
    "weaponHP":12,
    "maxHp":8,
    "currHp":8
}


document.getElementById('rollButton').addEventListener('click', () => {
    const rollLabel1 = document.getElementById('rollLabel1').value;
    const charName = document.getElementById('charName').value;

    const hitThreshold = parseInt(document.getElementById('hitThreshold').value);
    const plusFlatAccNum = parseInt(document.getElementById('plusFlatAccNum').value);
    // roll a d20, add accuracy modifier
    const accRollTotal = (Math.floor(Math.random() * 20) + 1) + plusFlatAccNum;
    // If you meet or beat the threshold, you hit
    if (accRollTotal < hitThreshold) {
        // prep strings to report on results
        const result_line_1 = `Rolled ACC ${accRollTotal} vs ${hitThreshold}` 
        const result_line_2 = `---${charName} missed!`;
    // call function to print results to screen (generates new <div>s)
        updateRollResults(result_line_1, result_line_2);
    }
    else {
        const numDamDice = parseInt(document.getElementById('numDamDice').value);
        const numDamSides = parseInt(document.getElementById('numDamSides').value);
        const plusFlatDamNum = parseInt(document.getElementById('plusFlatDamNum').value);
        if (!charName || isNaN(numDamDice) || isNaN(numDamSides) || numDamDice <= 0 || numDamSides <= 0) {
            alert('Please enter valid inputs.');
            return;
        }
        const rolls = [];
        let total = 0;
        // roll dice to get a total
        for (let i = 0; i < numDamDice; i++) {
            const roll = Math.floor(Math.random() * numDamSides) + 1;
            rolls.push(roll);
            total += roll;
        }
        // add the flat bonus
        total += plusFlatDamNum;
    // prep strings to report on results
        const result_line_1 = `HIT [${accRollTotal} vs ${hitThreshold}]! ${charName} rolled ${numDamDice}d${numDamSides} [${rolls.join('],[')}]` 
        const result_line_2 = `${charName}'s ${rollLabel1} got a total of ${total}`;
    // call function to print results to screen (generates new <div>s)
        updateRollResults(result_line_1, result_line_2);
    }
    });

function updateRollResults(line1, line2) {
    const rollResultsDiv = document.getElementById('rollResults');
// update resulte for entry 2 (has to come first, because we're putting the other one above it, actually)
    const resultEntry2 = document.createElement('div');
    resultEntry2.textContent = line2;
    rollResultsDiv.insertBefore(resultEntry2, rollResultsDiv.firstChild);
// update results for entry1   
    const resultEntry1 = document.createElement('div');
    resultEntry1.textContent = line1;
    rollResultsDiv.insertBefore(resultEntry1, rollResultsDiv.firstChild);

// Limit the log to the last 10 results (5 sets of 2 lines)
    while (rollResultsDiv.childNodes.length > 10) {
        rollResultsDiv.removeChild(rollResultsDiv.lastChild);
    }
}

function ad_hoc_dice_roll() {
    const key = parseInt(document.getElementById('dice-key').value);
        const diceString = dice_pools[key];
        if (!diceString) {
            console.log("Invalid key");
            return;
        } else {
            result_arr = rollDice(diceString);
            console.log (`${result_arr.total} got from ${diceString} --> ${result_arr.rolls} `)
        }
}

function rollDice(diceString) {
    const diceParts = diceString.split('+');
    let total = 0;
    const rolls = [];
    diceParts.forEach(part => {
        const [count, sides] = part.split('d').map(Number);
        for (let i = 0; i < count; i++) {
            const roll = Math.floor(Math.random() * sides) + 1;
            rolls.push(roll);
            total += roll;
        }
    });
    return { total, rolls };
}

function compareRolls(personA, personB) {
    const personAName = personA.name;
    const personAAccDice = dice_pools[personA.acc];
    const personAAccuracyRoll = rollDice(personAAccDice);

    const personBName = personB.name;
    const personBEvaDice = dice_pools[personB.eva];
    const personBEvasionRoll = rollDice(personBEvaDice);
    
    var enemyIsHit = false

    if (personAAccuracyRoll.total > personBEvasionRoll.total) {
        const hitDiff = personAAccuracyRoll.total - personBEvasionRoll.total
        console.log(`${personAName}: ${personAAccDice} - [${personAAccuracyRoll.rolls.join('], [')}] = ${personAAccuracyRoll.total}; ${personBName} rolled ${personBEvaDice} - [${personBEvasionRoll.rolls.join('], [')}] = ${personBEvasionRoll.total}.`);
        console.log(`${personAName} hit! [${personAAccuracyRoll.total} vs. ${personBEvasionRoll.total}] diff of ${hitDiff}`)
        enemyIsHit = true
    } else if (personAAccuracyRoll.total < personBEvasionRoll.total) {
        const missedDiff = personBEvasionRoll.total - personAAccuracyRoll.total
        console.log(`${personAName}: ${personAAccDice} - [${personAAccuracyRoll.rolls.join('], [')}] = ${personAAccuracyRoll.total}; ${personBName} rolled ${personBEvaDice} - [${personBEvasionRoll.rolls.join('], [')}] = ${personBEvasionRoll.total}.`);
        console.log(`${personAName} missed... [${personAAccuracyRoll.total} vs. ${personBEvasionRoll.total}] diff of ${missedDiff}`)
    } 
    else {
        console.log(`${personAName}: ${personAAccDice} - [${personAAccuracyRoll.rolls.join('], [')}] = ${personAAccuracyRoll.total}; ${personBName} rolled ${personBEvaDice} - [${personBEvasionRoll.rolls.join('], [')}] = ${personBEvasionRoll.total}.`);
        console.log(`Clash! Tie goes to attacker, ${personAName}`) 
        enemyIsHit = true   
    }
    // deal damage to personB if damage is done
    if (enemyIsHit) {
        console.log(`-- calculating ${personAName}'s Damage Vs. ${personBName}'s Armor ---`)
        const personADamDice = dice_pools[personA.dam];
        const personADamageRoll = rollDice(personADamDice);

        const personBArmDice = dice_pools[personB.arm];
        const personBArmorRoll = rollDice(personBArmDice);

        const dam_diff = personADamageRoll.total - personBArmorRoll.total
        if (dam_diff <= 0){
            console.log(`${personAName} hits (${personADamDice}) [${personADamageRoll.rolls.join('], [')}]; ${personBName} defends (${personBArmDice}) [${personBArmorRoll.rolls.join('], [')}]; `)
            console.log(`${personADamageRoll.total} DAM vs ${personBArmorRoll.total} ARM` )
            console.log(`Damage glances off! ${personBName} is unharmed. Diff of ${Math.abs(dam_diff)}`)
        } else {
            console.log(`${personAName} hits (${personADamDice}) [${personADamageRoll.rolls.join('], [')}]; ${personBName} defends (${personBArmDice}) [${personBArmorRoll.rolls.join('], [')}]; `)
            console.log(`${personADamageRoll.total} DAM vs ${personBArmorRoll.total} ARM`)
            console.log(`${personAName} hits ${personBName} for ${dam_diff} !`)
            // store old hp for reference in console logging output
            const oldHP = personB.currHp
            personB.currHp -= dam_diff
            // subtract and report on the hp difference
            console.log(`${personBName}'s HP: ${oldHP} - ${dam_diff} = ${personB.currHp}`)
            if (personB.currHp <= 0){
                console.log(`${personBName} is knocked out!`)
            }
        }

    }
    // NYI: track when currHP <= 0 for reporting on character KO
}

// run it on dummy button clicked
document.getElementById('dumbButton').addEventListener('click', () => {
    compareRolls(alice_data, bob_data);
});
