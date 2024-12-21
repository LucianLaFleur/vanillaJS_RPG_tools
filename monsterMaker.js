
//  input string is the relevant CR; fractions are allowed because 1/8 and the like
// however, half-amonts should be assigned to monsters appropriately too, adjusting for deviations between CR lvls above 1.

// All stats are based around averages

// rand num between 1 and 100
// const randBetween1and100 = Math.floor((Math.random() * 100) + 1);

// calculate monster's stat bonus from core stats in baseAbility
// 10 is neutral, but get +1 for each 2 units over 10; round down, same as for characters
        // Math.floor((monster.baseAbility - 10) / 2)
        // ex: both of these will give 5
    //      console.log(Math.floor((20 - 10) / 2))
    //      console.log(Math.floor((21 - 10) / 2))
        // 21 - 10 = 11
        // 11 / 2 = 5.5  , but round down to the nearest whole number, so 5
        
const monsterTable = {
    "1/8": {
        skill:2,
        AC:11,
        HP:4,
        toHit:2,
        DPR:3,
        XP:25,
        baseAbility: 8
    },
    "1/4": {
        skill:2,
        AC:12,
        HP:8,
        toHit:2,
        DPR:5,
        XP:50,
        baseAbility: 9
    },
    "1/2": {
        skill:2,
        AC:12,
        HP:12,
        toHit:3,
        DPR:7,
        XP:100,
        baseAbility: 10
    },
    "1": {
        skill:2,
        AC:13,
        HP:22,
        toHit:4,
        DPR:10,
        XP:200,
        baseAbility: 12
    },
    "2": {
        skill:2,
        AC:13,
        HP:37,
        toHit:4,
        DPR:13,
        XP:450,
        baseAbility: 13
    },
    "3": {
        skill:2,
        AC:13,
        HP:52,
        toHit:5,
        DPR:17,
        XP:1100,
        baseAbility: 13
    },
    "4": {
        skill:3,
        AC:14,
        HP:67,
        toHit:5,
        DPR:22,
        XP:1100,
        baseAbility: 14
    },
}

// variation method - roll 4d6 to get bell curve dist
// 4d6 avg = 14
// for a positive number 4d6_result - 14, increase AC by 1, decrease HP by 10%
// for each +1, increase AC by 1, decrease HP by 10%
// special case, if the result is 24, increase ac by 10 and assign HP = 1
// same 4d6 variation for to-hit
// for each +1, decrease DAM by 10%

function roll4d6() {
    let total = 0;
    const rolls = [];
    for (let i = 0; i < 4; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        rolls.push(roll);
        total += roll;
    }
    console.log([total, rolls])
    return { total, rolls };
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

// takes 2 integers, a given number, and a second integer representing a percentage
// second number is expected to represent tens, like 1 = 10%, 2= 20%, etc.
// Thus, (57, 30) would mean "What's 30% of 57, rounded up?"
function getPercentageOfANumber(int, percentageInt){
    return Math.max(1, Math.ceil(int * ((10 * percentageInt)/100)));
};

function adjustMonsterDef(key) {
    const { total, rolls } = roll4d6();
    const adjustmentValue = total - 14;
    console.log(`DEF difference from 14 is ${adjustmentValue}`)
    const monster = { ...monsterTable[key] }; // Clone the monster object
    
    const hpChange = getPercentageOfANumber(monster.HP, adjustmentValue)
    let adjustmentText = "";

    if (adjustmentValue > 0) {
        monster.AC += adjustmentValue;
        monster.HP -= hpChange;
        adjustmentText = `AC +${adjustmentValue}, HP -${Math.floor(10 * adjustmentValue)}%`;
    } else if (adjustmentValue < 0) {
        // this has to be a plus for the AC because we're using adjustment value, which will be negative in this case
        monster.AC += adjustmentValue;
        monster.HP += hpChange;
        // it's gonna be negative so we need to multiply by -1
        adjustmentText = `AC -${adjustmentValue}, HP +${-1 *(Math.floor(10 * adjustmentValue))}%`;
    } else {
        adjustmentText = "No changes made to AC or HP.";
    }

    // Build output texts
    const rollOutputText = `${adjustmentText} --> Rolled ${total} - [${rolls.join("], [")}].`
    const stringStatBloc = `Adjusted Monster: ${JSON.stringify(monster, null, 2)}`;
    // log the rolls so we can check logic later
    console.log(rollOutputText)
    console.log(stringStatBloc)
    
    return {monster}
}

// get +15% DPR for each AC missed by
function adjustMonsterAtk(key) {
    const { total, rolls } = roll4d6();
    const adjustmentValue = total - 14;
    console.log(`ATK difference from 14 is ${adjustmentValue}`)
    const monster = { ...monsterTable[key] }; // Clone the monster object
    
    const damChangePercent = getPercentageOfANumber(monster.DPR, adjustmentValue)
    let damAdjustString = "";
    
    if (adjustmentValue > 0) {
        monster.AC += adjustmentValue;
        monster.HP -= hpChange;
        damAdjustString = `Atk +${adjustmentValue}, DPR -${Math.floor(15 * adjustmentValue)}%`;
    } else if (adjustmentValue < 0) {
        // this has to be a plus for the AC because we're using adjustment value, which will be negative in this case
        monster.AC += adjustmentValue;
        monster.HP += hpChange;
        // it's gonna be negative so we need to multiply by -1
        damAdjustString = `Atk -${adjustmentValue}, DPR +${-1 *(Math.floor(15 * adjustmentValue))}%`;
    } else {
        damAdjustString = "No changes made to Atk or DPR.";
    }
    // skill:3,
    // AC:14,
    // HP:67,
    // toHit:5,
    // DPR:22,
    // XP:1100,
    // baseAbility: 14
    // Build output texts
    const rollOutputText = `${damAdjustString} --> Rolled ${total} - [${rolls.join("], [")}].`
    const stringStatBloc = `Adjusted Monster: ${JSON.stringify(monster, null, 2)}`;
    // log the rolls so we can check logic later
    console.log(rollOutputText)
    console.log(stringStatBloc)
    
    return {monster}
}

function adjustMonster(key){
    if (!monsterTable[key]) {
        console.error("Invalid key, monster not found!");
        return null;
    }
    mon1 = adjustMonsterDef(key);
    console.log("----------------------")
    console.log(mon1)

    // const outputContainer = document.getElementById("outputContainer");
    // const newOutputDiv = document.createElement("div");
    // newOutputDiv.style.border = "1px solid #ccc";
    // newOutputDiv.style.padding = "10px";
    // newOutputDiv.style.marginBottom = "10px";
    // outputContainer.appendChild(newOutputDiv);
    // ...
    // const line1 = document.createElement("p");
    // line1.textContent = rollOutputText
    // newOutputDiv.appendChild(line1)
    // const line2 = document.createElement("p");
    // line2.textContent = stringStatBloc
    // newOutputDiv.appendChild(line2)
}

document.getElementById("adjustButton").addEventListener("click", () => {
    const inputKey = document.getElementById("monsterCRKey").value;
    console.log(inputKey)
    adjustMonster(inputKey);
});
// skill:3,
//         AC:14,
//         HP:67,
//         toHit:5,
//         DPR:22,
//         XP:1100,
//         baseAbility: 14
// DC for a monster ability = 8 + Proficiency + Relevant Modifier
// --> let abilityDC = 8 + monster.skill + Math.floor((monster.baseAbility - 10) / 2)
