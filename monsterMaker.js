const tarotData = {
    "cardName": "Lengthy description",
    // ... major arcanna not in order yet...
    "reversed The Fool": "When you land on the reversed Fool in your reading, you can generally find his more negative characteristics being on display. It can mean that you are literally acting like a fool by disregarding the repercussions of your actions. Like the youth depicted in the card, you don't see how dangerous of a position you find yourself in. A reversed Fool card can show that you are living in the moment and not planning for the future. The reversed Fool meaning serves as caution that you should be more aware so as not to be taken advantage of",
    "The Fool":"The Fool card is numbered 0, which is considered to be a number of infinite potential. Consider him a blank slate, for The Fool has yet to develop a clear personality. He is the symbol of innocence - his journey to come will shape his character yet. To see the The Fool generally means a beginning of a new journey, one where you will be filled with optimism and freedom from the usual constraints in life. When we meet him, he approaches each day as an adventure, in an almost childish way. He believes that anything can happen in life and there are many opportunities that are lying out there, in the world, waiting to be explored and developed.",
    "reversed The High Priestess": "When it comes to the High Priestess reversed, it can mean that you are finding it difficult to listen to your intuition. It is time for you to meditate and try new approach, for at this moment, the rational approach will not work. Something has been telling you to follow your gut, but you may be ignoring the call. There is a lot of confusion around you, and your actions may feel contrary to what you know is right. You must never be afraid to ask questions of yourself that may illuminate a new path forward for you, one that is more authentic to your inner self and your individual values.",
    "The High Priestess": "(lunar associated) The meaning of the High Priestess is related with inner knowledge. Her appearance in a reading can signify that it is time for you to listen to your intuition rather than prioritizing your intellect and conscious mind. When the High Priestess shows up it can depict an archetype known as the divine feminine - the mysterious female that understands and holds the answers to the deep unknowns; religion, self, nature. She represents someone that is intuitive, and beginning to open to her or his spirituality. Meditation, prayer and new spiritual work is indicated. ",
    "reversed The Hermit": "When reversed, you are perhaps in a situation where you'd like to be alone; there is nothing wrong about that. However, there is a possibility that your seclusion may become harmful to both yourself and others. Though the Hermit sets forwards with noble intentions to search for his inner truth, his path inward may also be filled with great danger. Going inward may lead to madness and the abyss, for the unconscious is filled with images that he may not yet understand, lurking and waiting to lure you ever inside. Like a man that gets lost in his own dreams, the hermit may find himself stuck in a world of his own, alone, trapped, unreal. You must learn to balance your need for truth with connection to your fellow humans. When it comes to work, the hermit reversal meaning refers to your preparedness to get to the bottom of something that has been troubling you for quite some time now. There is searching to be done, and it will be your responsibility to ask the question that will allow the other people to understand the circumstances.",
    "3 Swords": "The Three of Swords depicts the message of rejection, betrayal, hurt and discouragement. In moments like these, we are well served by the mind. If you can think logically about it and prepare for the experience, the impact of this pain may be minimized. But remember too, that pain and grief are a normal part of life, because they make us appreciate what joy and happiness we have, as well as teaching us. It is through pain that we learn to be avoid mistakes that could lead us into danger and grief. It is therefore a necessity in the journey of life. The Three of Swords therefore is a depiction of suffering that is meant to make us stronger, more careful and more vigilant. Sometimes life gives us no choice - we are knocked down. But what determines one's future is the choice of whether to remain knocked down, or rise again. Each little piece of suffering you encounter serves as a stepping stone to find a deeper meaning in this world. This card comes at a time when you need to prepare yourself for this next stage in life. While the grief may be extremely hurtful, it enables you to forget your past and focus on your future knowing that you have control of what actions you take afterwards. Don’t dwell so much on what is troubling you but instead, focus on what is approaching, because you determine your fate.",
    "reversed 3 Swords": "The Three of Swords reversed indicates that have faced a recent loss, a break-up or a moment of grief. You may be still recovering from this, and your emotions have not completely calmed, making it difficult to move on. Although you may still be thinking of your past suffering, this card may be a signal that it's time to let go and look forwards towards life ahead of you, because there is much for you to enjoy. Many don’t see this, and they end up being immersed in their own pain for too long, delaying their own recovery process. Don’t focus too much on what happened, renew your emotions and gather your courage. The reversed Three of Swords card is here to let you know that all difficult moments pass - they are not there to stay, and when we fall, we can also rise again.",
    "Queen Pentacles":"The Queen of Pentacles represents both a down-to-earth woman who plays many roles to ensure that she keeps her family happy. She knows how and when to show love - keeping an orderly home, cooking comforting meals and takes care of the children. But do not mistake her for being only a homebody - alongside all these motherly attributes, she can plan business ventures and execute her plans successfully. It is through her naturally talented business sense that she is surrounded by such luxury. She is quiet and does not like disclosing her financial accounts, fearing that it could bring more complexity to her life, which she desires to keep rather simple. She may have a secret bank account that nobody knows about - for she may choose to be careful, vigilant and self-sufficient.The Queen of Pentacles therefore represents a motherly figure who desires to help you maneuver your way and achieve your goals with a the helping of her common sense. She will not only show you love, but she will also show you the way forward whenever you seem to be stranded and confused. With her advice, she will ensure that you do not make dangerous financial decisions. She offers you precautions, principles and support, all lessons that she has learned in her personal life. Because she is a self-made woman, she wants too for you to be independent and wise",
    "reversed Queen Pentacles":"When the Queen of Pentacles becomes disconnected with the energy of her suit, she can become someone who is completely self-absorbed. Gone is the upright generosity in her suit, she can be selfish and even envious when others successes seem greater than hers. Upright, her home is usually a sanctuary for her guests, but reversed it may instead be slovenly - she loses the ability to take care of herself and her surroundings. Her focus on the material may manifest negatively, making her greedy, and yet lacking in her sense of duty and capability. How can she ground herself again, how can she re-enter the sacred relationship she naturally feels with the earth and all its living creatures?The Queen of Pentacles reversed may also indicate that you have misplaced priorities, which may eventually be compromising to your future. You may find yourself distracted and unable to focus on your work and your long-term goals. You could also be busy working on projects without taking time to consult experienced people who can guide you away from mistakes.",
    // "reversed King of Pentacles": "n/a",
}

//  input string is the relevant CR; fractions are allowed because 1/8 and the like
// however, half-amonts should be assigned to monsters appropriately too, adjusting for deviations between CR lvls above 1.

// All stats are based around averages

// rand num between 1 and 100
// const randBetween1and100 = Math.floor((Math.random() * 100) + 1);
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

function makeCards() {
    const suits = ["Cups", "Pentacles", "Wands", "Swords"];
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Page", "Knight", "Queen", "King"];
    const majorArcana = [
        "The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", 
        "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", 
        "Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", 
        "The Devil", "The Tower", "The Star", "The Moon", "The Sun", 
        "Judgment", "The World"
    ];
    const deck = [];
        for (const suit of suits) {
            for (const rank of ranks) {
                deck.push(`${rank} of ${suit}`);
            }
        }
        for (const bigCard of majorArcana){
            deck.push(`${bigCard}`);
        }
        shuffleArray(deck)
        return deck
}

// Function to display cards in a <div> with <p> tags
// NYI update inputs to take in dictionary with definitions for the cards

function display8PointPlotter(cardsArr, intensityArr) {
    const outputDiv = document.getElementById("tarot-output1");
    outputDiv.innerHTML = ""; // Clear any existing content
    cardsArr.forEach((card, index) => {
        // card can be used to access the dictionary being made, NYI
        const p = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        if (index == 0) {
            p.textContent = `I. establish “normal” life -  ` 
            p2.textContent = `${intensityArr[index]}`;
            p3.textContent = "placeholder"
        } else if (index == 1){
            p.textContent = `II. desire sparks motivation -  ` 
            p2.textContent = `${intensityArr[index]}`;
            p3.textContent = "placeholder"
        } else if (index == 2){
            p.textContent = `III. - encounter unfamiliar state - ` 
            p2.textContent = `${intensityArr[index]}`;
            p3.textContent = "placeholder"
        } else if (index == 3){
            p.textContent = `IV. - struggle to adapt -  ` 
            p2.textContent = `${intensityArr[index]}`;
            p3.textContent = "placeholder"
        } else if (index == 4){
            p.textContent = `V. - decision point get / re-evaluate what they wanted -  ` 
            p2.textContent = `${intensityArr[index]}`;
            p3.textContent = "placeholder"
        } else if (index == 5){
            p.textContent = `VI. - confront conflict for a cause -  ` 
            p2.textContent = `${intensityArr[index]}`;
            p3.textContent = "placeholder"
        } else if (index == 6){
            p.textContent = `VII. - On the edge of defeat -  ` 
            p2.textContent = `${intensityArr[index]}`;
            p3.textContent = "placeholder"
        } else {
            p.textContent = ` VIII. - return home & show how things changed - ` 
            p2.textContent = `${intensityArr[index]}`;
            p3.textContent = "placeholder"
        }
        outputDiv.appendChild(p);
        outputDiv.appendChild(p2);
        // outputDiv.appendChild(p3);
    });
}

function displayCharacter(cardsArr, intensityArr) {
    const outputDiv = document.getElementById("tarot-output1");
    outputDiv.innerHTML = ""; // Clear any existing content
    cardsArr.forEach((card, index) => {
        // card can be used to access the dictionary being made, NYI
        const p = document.createElement("p");
        const p2 = document.createElement("p")
        if (index == 0) {
            p.textContent = `archetype pt 1 ${intensityArr[index]}` 
        } else if (index == 1){
            p.textContent = `archetype pt 2 ${intensityArr[index]}` 
        } else if (index == 2){
            p.textContent = `key desire ${intensityArr[index]}` 
        } else if (index == 3){
            p.textContent = `likable trait ${intensityArr[index]}` 
        } else if (index == 4){
            p.textContent = `competency ${intensityArr[index]}` 
        } else if (index == 5){
            p.textContent = `personality 1 ${intensityArr[index]}` 
        } else if (index == 6){
            p.textContent = `personality 2 ${intensityArr[index]}` 
        } else if (index == 7){
            p.textContent = `Appearance ${intensityArr[index]}` 
        } else if (index == 8){
            p.textContent = `Primary flaw ${intensityArr[index]}` 
        } else if (index == 9){
            p.textContent = `Background ${intensityArr[index]}` 
        } else if (index == 10){
            p.textContent = `Connections ${intensityArr[index]}` 
        } else if (index == 11){
            p.textContent = `Near Future ${intensityArr[index]}` 
        } else if (index == 12){
            p.textContent = `Total Arc Crux ${intensityArr[index]}` 
        } else {
        }
        outputDiv.appendChild(p);
        outputDiv.appendChild(p2);
        // outputDiv.appendChild(p3);
    });
}

function addReverseChance(inputArr){
    return_arr = []
    criticality_string_arr = []
    for (let i = 0; i < inputArr.length; i++) {
        randBetween1and100 = Math.floor((Math.random() * 100) + 1);
        if (randBetween1and100 < 5) {
            console.log(`CRIT REVERSE card ${i} rolled ${randBetween1and100}`)
            return_arr.push(`reversed ${inputArr[i]}`)            
        } else if (randBetween1and100 < 35) {
            console.log(`NORMAL REVERSE card ${i} rolled ${randBetween1and100}`)
            return_arr.push(`reversed ${inputArr[i]}`)            
        } else if (randBetween1and100 < 50) {
            console.log(`SLIGHT REVERSE card ${i} rolled ${randBetween1and100}`)
            return_arr.push(`reversed ${inputArr[i]}`)            
        } else if (randBetween1and100 < 65) {
            console.log(`SLIGHT UPRIGHT card ${i} rolled ${randBetween1and100}`)
            return_arr.push(`upright ${inputArr[i]}`)            
        }         else if (randBetween1and100 < 95) {
            console.log(`NORMAL UPRIGHT card ${i} rolled ${randBetween1and100}`)
            return_arr.push(`upright ${inputArr[i]}`)            
        } else {
            console.log(`CRIT UPRIGHT card ${i} rolled ${randBetween1and100}`)
            return_arr.push(`upright ${inputArr[i]}`)                
        }
        criticality_string_arr.push(`${return_arr[i]} => ${randBetween1and100}`)
        // console.log(`card ${i} rolled ${randBetween1and100} and...`);
    }
    return [return_arr, criticality_string_arr];
};

document.getElementById('dumRoll').addEventListener('click', () => {
    // roll4d6()
    let chosenCards = makeCards()
    // for 8 point version
    // let cardSubset = chosenCards.slice(0,7)
    let cardSubset = chosenCards.slice(0,13)
    let pairedReverseAndIntensityArrs = addReverseChance(cardSubset)
    let arrWithReversals = pairedReverseAndIntensityArrs[0] 
    let arrWithIntensity = pairedReverseAndIntensityArrs[1]
    // for the 8 point plot version
    // display8PointPlotter(arrWithReversals, arrWithIntensity)
    displayCharacter(arrWithReversals, arrWithIntensity)
    
})

// function roll4d6() {
//     let total = 0;
//     const rolls = [];
//     for (let i = 0; i < 4; i++) {
//         const roll = Math.floor(Math.random() * 6) + 1;
//         rolls.push(roll);
//         total += roll;
//     }
//     return { total, rolls };
// }

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
