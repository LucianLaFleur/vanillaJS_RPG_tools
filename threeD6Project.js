// var for max num of logs before deleting
const log_limit_num = 10

// const key = parseInt(document.getElementById('dice-key').value);
//     const diceString = dice_pools[key];
//     if (!diceString) {
//         console.log("Invalid key");
//         return;
//     }

// const dummyDicePool = {
//     8 : "2d4+1d6",
//     9 : "1d4+2d6",
//     10 : "3d6",
//     11 : "2d6+1d8",
//     12 : "1d6+2d8",
// }

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
    "is_hero": "hero",
    "acc":12, 
    "dam":4,
    "eva":12,
    "arm":2,
    "parry":1,
    "maxWepHP":6,
    "currWepHP":6,
    "maxHp":8,
    "currHp":8
}

const bob_data = {
    "name": "Bob",
    "is_hero": "enemy",
    "acc":10, 
    "dam":5,
    "eva":9,
    "arm":2,
    "parry":3,
    "maxWepHP":12,
    "currWepHP":12,
    "maxHp":8,
    "currHp":8
}

const charlie_data = {
    "name": "Charlie",
    "is_hero": "neutral",
    "acc":13, 
    "dam":9,
    "eva":10,
    "arm":2,
    "parry":3,
    "maxWepHP":12,
    "currWepHP":12,
    "maxHp":8,
    "currHp":8
}
// 12 11 6 9
const delta_data = {
    "name": "Delta",
    "is_hero": "hero",
    "acc":12, 
    "dam":11,
    "eva":6,
    "arm":9,
    "parry":3,
    "maxWepHP":12,
    "currWepHP":12,
    "maxHp":8,
    "currHp":8
    // remaining stat poins = 12
}


// const bob_data = {
//     "name": "Bob",
//     "acc":10, 
//     "dam":5,
//     "maxHp":8,
//     "currHp":8
// }

//  NYI need to DRY up proxy creation

// Create a proxy for alice_data to watch for changes
const alice_data_proxy = new Proxy(alice_data, {
    set(target, property, value) {
        // Set the property on the target object
        target[property] = value;
        // If the property is currHp, update the display
        if (property === 'currHp') {
            updateHpDisplay(target, 'name-container1');
        }
        // Indicate that the assignment was successful
        return true;
    }
});
// Create a proxy for bob_data to watch for changes
const bob_data_proxy = new Proxy(bob_data, {
    set(target, property, value) {
        // Set the property on the target object
        target[property] = value;
        // If the property is currHp, update the display
        if (property === 'currHp') {
            updateHpDisplay(target, 'name-container2');
        }
        // Indicate that the assignment was successful
        return true;
    }
});
const charlie_data_proxy = new Proxy(charlie_data, {
    set(target, property, value) {
        // Set the property on the target object
        target[property] = value;
        // If the property is currHp, update the display
        if (property === 'currHp') {
            updateHpDisplay(target, 'name-container3');
        }
        // Indicate that the assignment was successful
        return true;
    }
});
const delta_data_proxy = new Proxy(delta_data, {
    set(target, property, value) {
        // Set the property on the target object
        target[property] = value;
        // If the property is currHp, update the display
        if (property === 'currHp') {
            updateHpDisplay(target, 'name-container4');
        }
        // Indicate that the assignment was successful
        return true;
    }
});

const allCharacterStatObjects= [alice_data, bob_data, charlie_data, delta_data];
const allCharacterProxyObjects= [alice_data_proxy, bob_data_proxy, charlie_data_proxy, delta_data_proxy];

// populates name-dropdowns
const charNames = ["Alice", "Bob", "Charlie", "Delta"];
// used to target compare rolls based on name-dropdown input
const charProxyNameDictionary = {
    "Alice": alice_data_proxy,
    "Bob": bob_data_proxy,
    "Charlie": charlie_data_proxy,
    "Delta": delta_data_proxy
}


function createStatItem(char_data, key, value) {
    const statItem = document.createElement('div');
    statItem.className = 'stat-item';

    const label = document.createElement('label');
    label.textContent = key;

    const input = document.createElement('input');
    input.type = 'number';
    input.value = value;
    input.min = 1;
    input.max = 999;

    input.addEventListener('input', () => {
        const val = parseInt(input.value, 10);
        if (val >= 1 && val <= 999) {
            char_data[key] = val;
        } else {
            input.value = char_data[key];
        }
    });

    statItem.appendChild(label);
    statItem.appendChild(input);

    return statItem;
}

function addStatItemToRowDiv(statItem,number) {
const rowDiv = document.createElement('div');
    rowDiv.className = 'container row';
    rowDiv.id = `row-container${numericalOrder}`;
    
    rowDiv.appendChild(statItem)
};

function genDivsForEachChar(num){
    const container = document.getElementById("column-container");
    // const newRowDiv1 = document.createElement('div');
    // newRowDiv1.className = 'container row';
    // newRowDiv1.id = `row-container${num}`;
    // container.appendChild(newRowDiv1)

    const newDiv2 = document.createElement('div');
    newDiv2.className = 'name container row';
    newDiv2.id = `name-container${num}`;
    container.appendChild(newDiv2)

    const newDiv3 = document.createElement('div');
    newDiv3.className = 'stat container row';
    newDiv3.id = `stat-container${num}`;
    container.appendChild(newDiv3)
}

function populateContainer(char_object,num) {
    const statContainer = document.getElementById(`stat-container${num}`)
    for (const [key, value] of Object.entries(char_object)) {
        // for all stats (excluding non-stat keys)
        if ((key !== "name") && (key !== "is_hero")) {
            const statItem = createStatItem(char_object, key, value);
            statContainer.appendChild(statItem);
        }
    }
}

// Function to create the HP display
function createHpDisplay(dataProxy, targetDivId) {
    // Create a div to display the currHp
    const tarDiv = document.getElementById(targetDivId);
    const myParagraph = tarDiv.querySelector("p");
    myParagraph.textContent = `Name: ${dataProxy.name} Current HP: ${dataProxy.currHp}`;
}
function populateName(char_obj,num) {
    const nameContainer = document.getElementById(`name-container${num}`);
    // Create a new <p> element and set its text content
    const myParagraph = document.createElement('p');
    myParagraph.textContent = '---' + char_obj["name"] + ': ---';
    
    // Check the value of char_obj[is_hero] and assign the appropriate class
    if (char_obj["is_hero"] === 'hero') {
        myParagraph.className = 'hero-char name';
    } else if (char_obj["is_hero"] === 'enemy') {
        myParagraph.className = 'enemy-char name';
    } else if (char_obj["is_hero"] === 'neutral') {
        myParagraph.className = 'neutral-char name';
    }
    nameContainer.appendChild(myParagraph);
    createHpDisplay(char_obj, `name-container${num}`);
}

// Function to update the HP display
function updateHpDisplay(data, targetDivId) {
    const tarDiv = document.getElementById(targetDivId);
    const myParagraph = tarDiv.querySelector("p");
    myParagraph.textContent = `Name: ${data.name} Current HP: ${data.currHp}`;
}

// make the html elements for everyone 

for (let i = 0; i < allCharacterStatObjects.length; i++) {
    const num = (i + 1)
    genDivsForEachChar(num, allCharacterStatObjects[i]);
    populateName(allCharacterStatObjects[i], num);
    populateContainer(allCharacterStatObjects[i], num);
  }
  
document.getElementById('rollButton1').addEventListener('click', () => {
    const charName = document.getElementById('charName1').value;

    const hitThreshold = parseInt(document.getElementById('hitThreshold1').value);
    const plusFlatAccNum = parseInt(document.getElementById('plusFlatAccNum1').value);
    // roll a d20, add accuracy modifier
    const accRollTotal = (Math.floor(Math.random() * 20) + 1) + plusFlatAccNum;
    // If you meet or beat the threshold, you hit
    if (accRollTotal < hitThreshold) {
        // prep strings to report on results
        const result_line_1 = `Rolled ACC ${accRollTotal} vs ${hitThreshold}` 
        const result_line_2 = `-[X]- ${charName} missed!`;
    // call function to print results to screen (generates new <div>s)
        updateRollResults(result_line_1, result_line_2);
    }
    else {
        const numDamDice = parseInt(document.getElementById('numDamDice1').value);
        const numDamSides = parseInt(document.getElementById('numDamSides1').value);
        const plusFlatDamNum = parseInt(document.getElementById('plusFlatDamNum1').value);
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
        const result_line_2 = `${charName}'s got a total of ${total}`;
    // call function to print results to screen (generates new <div>s)
        updateRollResults(result_line_1, result_line_2, 1);
    }
    });

    // dupe code! ----------------------------------------------------------------
    // gibbon
    // new function called by each event listener...
    // function needs to take in a number. 
    // need to use number variables in get element by id for inputs.
    
    document.getElementById('rollButton2').addEventListener('click', () => {
        const charName = document.getElementById('charName2').value;
    
        const hitThreshold = parseInt(document.getElementById('hitThreshold2').value);
        const plusFlatAccNum = parseInt(document.getElementById('plusFlatAccNum2').value);
        // roll a d20, add accuracy modifier
        const accRollTotal = (Math.floor(Math.random() * 20) + 1) + plusFlatAccNum;
        // If you meet or beat the threshold, you hit
        if (accRollTotal < hitThreshold) {
            // prep strings to report on results
            const result_line_1 = `Rolled ACC ${accRollTotal} vs ${hitThreshold}` 
            const result_line_2 = `-[X]- ${charName} missed!`;
        // call function to print results to screen (generates new <div>s)
            updateRollResults(result_line_1, result_line_2);
        }
        else {
            const numDamDice = parseInt(document.getElementById('numDamDice2').value);
            const numDamSides = parseInt(document.getElementById('numDamSides2').value);
            const plusFlatDamNum = parseInt(document.getElementById('plusFlatDamNum2').value);
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
            const result_line_2 = `${charName} got a total of ${total}`;
        // call function to print results to screen (generates new <div>s)
            updateRollResults(result_line_1, result_line_2, 2);
        }
        });

function updateRollResults(line1, line2, num) {
    const rollResultsDiv = document.getElementById(`rollResults${num}`);
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
    const display = document.getElementById('simple-result-display');
    display.textContent = ''
    const key = parseInt(document.getElementById('dice-key').value);
        const diceString = dice_pools[key];
        if (!diceString) {
            console.log("Invalid key");
            return;
        } else {
            result_arr = rollDice(diceString);
            const resultString = `[ ${result_arr.total} ] got from ${diceString} --> ${result_arr.rolls} `
            display.textContent = `${resultString}`
            console.log(resultString)
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


function compareOdds(n1, n2, simulations = 1000) {
    const diceString1 = dice_pools[n1];
    const diceString2 = dice_pools[n2];

    if (!diceString1 || !diceString2) {
        throw new Error("Invalid dice pool numbers provided.");
    }
    let n1Wins = 0;
    let n2Wins = 0;
    let clashes = 0;

    for (let i = 0; i < simulations; i++) {
        const result1 = rollDice(diceString1).total;
        const result2 = rollDice(diceString2).total;

        // increment whichever comes out on top
        if (result1 > result2) {
            n1Wins++;
        } else if (result2 > result1) {
            n2Wins++;
        } else {
        //  track the clashes when they equal the same
            clashes++;
        }
        // if result1 == result2, it's a tie, we don't count it towards wins
    }
    const n1WinProbability = ((n1Wins / simulations) * 100).toFixed(2);
    const n2WinProbability = ((n2Wins / simulations) * 100).toFixed(2);
    const clashProbability = ((clashes / simulations) * 100).toFixed(2);
    return {
        n1WinProbability,
        n2WinProbability,
        clashProbability
    };
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
            // store old hp for reference in console logging output
            const oldHP = personB.currHp
            personB.currHp -= dam_diff
            
            // subtract and report on the hp difference
            console.log(`${personBName}'s HP: ${oldHP} - ${dam_diff} = ${personB.currHp}`)
            console.log(`${personAName} hits ${personBName} for ${dam_diff} !`)
            if (personB.currHp <= 0){
                console.log(`Downed to --> ${personB.currHp}`)
                console.log(`${personBName} is knocked out!`)
                personB.currHp = 0
            }
        }

    }
    // NYI: track when currHP <= 0 for reporting on character KO
}
// run it on attak button clicked
document.getElementById('alice-atk-bob').addEventListener('click', () => {
    compareRolls(alice_data, bob_data_proxy);
});
document.getElementById('charlie-atk-bob').addEventListener('click', () => {
    compareRolls(charlie_data, bob_data_proxy);
});
document.getElementById('bob-atk-alice').addEventListener('click', () => {
    compareRolls(bob_data, alice_data_proxy);
});
document.getElementById('delta-atk-charlie').addEventListener('click', () => {
    compareRolls(delta_data, charlie_data_proxy);
});

// Calculate the cumulative cost to reach a given level
function cumulativeCostForLevel(level) {
    let totalCost = 0;
    for (let i = 1; i <= level; i++) {
        totalCost += costForLevel(i);
    }
    return totalCost;
}

// Individual level cost formula
function costForLevel(level) {
    return Math.floor(level ** 2 / 10) + 1;
}

// Generate balanced stats
function generateBalancedStats(pointPool, baseLevel, numStats = 4) {
    const stats = Array(numStats).fill(baseLevel);
    let remainingPoints = pointPool - stats.reduce((sum, lvl) => sum + cumulativeCostForLevel(lvl), 0);

    while (remainingPoints > 0) {
        // Bias: Choose a stat with a level below the base level more often
        const statIndex = stats.findIndex(stat => cumulativeCostForLevel(stat) < baseLevel) !== -1
            ? stats.findIndex(stat => cumulativeCostForLevel(stat) < baseLevel) // Prioritize lower stats
            : Math.floor(Math.random() * numStats); // Fall back to random

        const currentLevel = stats[statIndex];
        const nextLevel = currentLevel + 1;

        // Check if there's enough points to increase this stat
        const costIncrease = cumulativeCostForLevel(nextLevel) - cumulativeCostForLevel(currentLevel);
        if (costIncrease <= remainingPoints) {
            stats[statIndex] = nextLevel; // Increase the stat
            remainingPoints -= costIncrease;
        } else {
            break; // No more points available for increases
        }
    }

    // If remaining points are negative, adjust stats down
    while (remainingPoints < 0) {
        const statIndex = stats.findIndex(stat => cumulativeCostForLevel(stat) > baseLevel);
        if (statIndex === -1) break; // No stats to reduce further

        const currentLevel = stats[statIndex];
        const prevLevel = currentLevel - 1;
        const costReduction = cumulativeCostForLevel(currentLevel) - cumulativeCostForLevel(prevLevel);
        stats[statIndex] = prevLevel; // Reduce the stat
        remainingPoints += costReduction;
    }
    stats.push(remainingPoints)
    return stats;
}


// Populate the dropdowns
function populateDropdowns() {
    const name1Input = document.getElementById('name1-input');
    const name2Input = document.getElementById('name2-input');

    charNames.forEach(name => {
        const option1 = document.createElement('option');
        option1.value = name;
        option1.textContent = name;
        name1Input.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = name;
        option2.textContent = name;
        name2Input.appendChild(option2);
    });
}

// Enable ad hoc atk button if both dropdowns have valid selections
function checkSelections() {
    const name1Input = document.getElementById('name1-input');
    const name2Input = document.getElementById('name2-input');
    const button = document.getElementById('ad-hoc-atk');

    if (name1Input.value !== 'none' && name2Input.value !== 'none') {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

// Remove selected name from the other dropdown
function updateDropdowns() {
    const name1Input = document.getElementById('name1-input');
    const name2Input = document.getElementById('name2-input');

    const selectedName1 = name1Input.value;
    const selectedName2 = name2Input.value;

    // Reset both dropdowns before properly managing them
    name2Input.innerHTML = '<option value="none" selected>none</option>';
    name1Input.innerHTML = '<option value="none" selected>none</option>';

    charNames.forEach(name => {
        if (name !== selectedName2) {
            const option1 = document.createElement('option');
            option1.value = name;
            option1.textContent = name;
            if (name === selectedName1) option1.selected = true;
            name1Input.appendChild(option1);
        }
        if (name !== selectedName1) {
            const option2 = document.createElement('option');
            option2.value = name;
            option2.textContent = name;
            if (name === selectedName2) option2.selected = true;
            name2Input.appendChild(option2);
        }
    });
    checkSelections();
}
// Event listeners for dropdown changes
document.getElementById('name1-input').addEventListener('change', updateDropdowns);
document.getElementById('name2-input').addEventListener('change', updateDropdowns);
// Event listener for ad-hoc attack button click
document.getElementById('ad-hoc-atk').addEventListener('click', () => {
    const name1 = document.getElementById('name1-input').value;
    const name2 = document.getElementById('name2-input').value;
    compareRolls(charProxyNameDictionary[name1], charProxyNameDictionary[name2]);
});

// Initial population of dropdowns
populateDropdowns();

cou = 1
document.getElementById('dumbButton2').addEventListener('click', () => {
    const numOfStats = parseInt(document.getElementById('n-of-stats-input').value);
    const pointPool = parseInt(document.getElementById('avail-stat-pts-input').value);
    const baseLevel = parseInt(document.getElementById('base-lvl-input').value);
    const statsAndRemainder = generateBalancedStats(pointPool, baseLevel, numOfStats);
    // const stats = statsAndRemainder[0]
    // const remain_points = statsAndRemainder[1]
    console.log(`Made Stats ${cou}: ${statsAndRemainder[0]} ${statsAndRemainder[1]} ${statsAndRemainder[2]} ${statsAndRemainder[3]} ; remainder ${statsAndRemainder[0]}`);
    // console.log(`With ${remain_points} pts remaining`);
    cou += 1
});



document.getElementById('dumb-button-3').addEventListener('click', () => {
    const dicePoolLvl1 = document.getElementById('monte1-input').value;
    const dicePoolLvl2 = document.getElementById('monte2-input').value;
    const name1 = document.getElementById('monte1-name-input').value;
    const name2 = document.getElementById('monte2-name-input').value;
    
    const monteCarloResult = compareOdds(dicePoolLvl1, dicePoolLvl2);
       const actualRollInfo1 = rollDice(dice_pools[dicePoolLvl1])
    n1Total = actualRollInfo1.total
    
    const actualRollInfo2 = rollDice(dice_pools[dicePoolLvl2])
    n2Total = actualRollInfo2.total
    console.log(`Comparing rank ${name1} [${dice_pools[dicePoolLvl1]}] (vs.) ${name2} [${dice_pools[dicePoolLvl2]}]
    \nn1 wins: ${monteCarloResult.n1WinProbability}%\n n2 wins: ${monteCarloResult.n2WinProbability}% \n  Clash tie: ${monteCarloResult.clashProbability}%
    ${name1} Rank ${dicePoolLvl1} [${dice_pools[dicePoolLvl1]}]: [${actualRollInfo1.rolls.join('] + [')}] = ${n1Total}
    ${name2} Rank ${dicePoolLvl2} [${dice_pools[dicePoolLvl2]}]: [${actualRollInfo2.rolls.join('] + [')}] = ${n2Total}
    `);

    if (
        (monteCarloResult.n1WinProbability > monteCarloResult.n2WinProbability) &&
        (n1Total > n2Total)
    ) {
        const diff1 = n1Total - n2Total
        console.log(`By the numbers, ${name1} wins out over ${name2} by ${diff1}.  [${monteCarloResult.n1WinProbability}%]` )
    } else if (
        (monteCarloResult.n1WinProbability > monteCarloResult.n2WinProbability) &&
        (n1Total < n2Total)
    ) {
        const diff1 = n2Total - n1Total
        console.log(`Underdog, ${name2} wins out over ${name1} by ${diff1}! [${monteCarloResult.n2WinProbability}%]` )
    } else if (
        (monteCarloResult.n1WinProbability > monteCarloResult.n2WinProbability) &&
        (n1Total == n2Total)
    ) {
        console.log(`Clash, underdog ${name2}  is same as ${name1}! [${monteCarloResult.clashProbability}%]` )
    } else if (
        (monteCarloResult.n1WinProbability < monteCarloResult.n2WinProbability) &&
        (n1Total < n2Total)
    ) {
        const diff1 = n2Total - n1Total
        console.log(`by the numbers, ${name2} wins out over ${name1} by ${diff1}! [${monteCarloResult.n2WinProbability}%]` )
    } else if (
        (monteCarloResult.n1WinProbability < monteCarloResult.n2WinProbability) &&
        (n1Total > n2Total)
    ) {
        const diff1 = n1Total - n2Total
        console.log(`Underdog, ${name1} wins out over ${name2} by ${diff1}! [${monteCarloResult.n1WinProbability}%]` )
    } else if (
        (monteCarloResult.n1WinProbability < monteCarloResult.n2WinProbability) &&
        (n1Total == n2Total)
    ) {
        console.log(`The weaker ${name1} clashed with ${name2}! [${monteCarloResult.clashProbability}%]` )
    }

});

function calculateHypotenuse() {
    const legA = document.getElementById('horizontal_leg').value;
    const legB = document.getElementById('vertical_leg').value;
    const outputArea = document.getElementById('hypotenuseResults');
    let hypotneuseVal = Math.hypot(legA, legB); 
    console.log("Hypotenuse:", hypotneuseVal); // Output: Hypotenuse: 5
    outputArea.innerText = `Hypotenuse: ${hypotneuseVal}ft`
  }
  

function loadNavbar() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbarModule.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById('navbarContainer').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}
  
window.addEventListener('DOMContentLoaded', loadNavbar);
