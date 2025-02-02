//  nyi, remotefire01.wav if it's a miss

// getRandItemFromArr

// initialize vars for tracking prior items with the default set in
// getRandItemFromArr() so as to get a true-random item the first round
let lastMiss = "noPriorMiss";
let lastJackGif = "noPriorJack";

const jackSingleVictoryGif =  "./img/roger5.gif"
const jackMultiVictoryGif =  "./img/roger6.gif"
const queenSingleVictoryGif =  "./img/tie4.gif"
const queenMultiVictoryGif =  "./img/tie1.gif"
const kingSingleVictoryGif =  "./img/trooper4.gif"
const kingMultiVictoryGif =  "./img/trooper1.gif"
const jackpotVictoryGif = "./img/jackpot1.gif"
const mixHitVictoryGif = "./img/fleet1.gif"

// proof of concept to get one of many possible animations
const rogerArr = [
    "./img/roger1.gif", "./img/roger3.gif", "./img/roger4.gif",
    "./img/roger5.gif", "./img/roger6.gif", "./img/roger7.gif"
]

const kingIcon = "./img/kingIcon1.png"
const queenIcon = "./img/queenIcon1.png"
const jackIcon = "./img/jackIcon1.png"
// const jack1gif = "./img/queen1.gif"
const spinImgArr = [
    "./img/spin1.gif",
    "./img/spin2.gif",
    "./img/spin3.gif",
    "./img/spin4.gif",
    "./img/spin5.gif"
]


// put sounds on calculate payout


const spinStartSound = new Audio('./aud/padmeBlaster1.wav');
const startAud1 = new Audio('./aud/ue11.wav');
const startAud2 = new Audio('./aud/probedroidgun01.wav');
const startAud3 = new Audio('./aud/blastx4.wav');
const startAud4 = new Audio('./aud/atatCannon.wav');
const startAud5 = new Audio('./aud/tieBlast.wav');

const startAudArr = [startAud1, startAud2, startAud3, startAud4, startAud5]

const firstColumnHitSound = new Audio('./aud/padmeBlaster1.wav');
const secondColumnHitSound = new Audio('./aud/padmeBlaster1.wav');
// const secondColumnHitSound = new Audio('..\\soundboardFiles\\pomidorClock\\flash3.ogg');


// possible result audios
const jackSingleAud = new Audio('./aud/rogerRoger1.wav');
const jackMultiAud = new Audio('./aud/lotsOfRoger2.wav');
const queenSingleAud = new Audio('./aud/tieFlyby001.wav');
const queenMultiAud = new Audio('./aud/tieAttack2.wav');
const kingSingleAud = new Audio('./aud/blastEm2.wav');
const kingMultiAud = new Audio('./aud/stopThatShipPewPew.wav');
const mixHitAud = new Audio('./aud/cannonFleet1.wav');

// currently, same jackpot is used for 3 unique and for a blackout all-in-one
const jackpotAud = new Audio('./aud/jackpot2.wav');

const resultSoundsObj = {
    singleJackHit: jackSingleAud,
    multiJackHit:jackMultiAud,
    queenSingleHit: queenSingleAud,
    queenMultiHit: queenMultiAud,
    kingSingleHit: kingSingleAud,
    kingMultiHit: kingMultiAud,
    mixHit: mixHitAud,
}

// miss aud array, same structure for random choice of spin-start, since you do it a lot we want variation
const missAud1 = new Audio('./aud/remotefire01.wav');
const missAud2 = new Audio('./aud/reptrrico01.wav');
const missAud3 = new Audio('./aud/blastx2.wav');

const missAudArr = [missAud1, missAud2, missAud3]


    // Initialize or load the number from localStorage
    let currentPointsTotal = localStorage.getItem('number');
    if (!currentPointsTotal) {
        currentPointsTotal = 100;
        localStorage.setItem('number', currentPointsTotal);
    }
    
    // Display the initial number
    const pointsDisplay = document.getElementById('points-display');
    pointsDisplay.textContent = currentPointsTotal + " points";

    // Handle increment button click
    document.getElementById('increment-btn').addEventListener('click', () => {
        currentPointsTotal = parseInt(currentPointsTotal) + 5;
        pointsDisplay.textContent = currentPointsTotal + " points";
        localStorage.setItem('number', currentPointsTotal);
    });

    document.getElementById('decrement-btn').addEventListener('click', () => {
        currentPointsTotal = parseInt(currentPointsTotal) - 100;
        pointsDisplay.textContent = currentPointsTotal + " points";
        localStorage.setItem('number', currentPointsTotal);
    });

    // Handle clear button click
    document.getElementById('clear-btn').addEventListener('click', () => {
        localStorage.removeItem('number');
        currentPointsTotal = 100; // Reset to default
        pointsDisplay.textContent = currentPointsTotal + " points";
        console.log('The cookies have been cleared. Points reset to 100');
    });

function tempDisableButton(btnIdString) {
    const button = document.getElementById(btnIdString);
    button.disabled = true; // Disable the button
    setTimeout(() => {
        button.disabled = false; // Enable the button after 1.2 seconds
    }, 1800);
}


// gets a random whole number between the min and max integers given as inputs
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function getRandItemFromArr(inputArr, itemToExclude="unimportant..."){
    //  with a prior item to be excluded, make a temp arr without that specific item,
    // then get a random item from the remaining ones
        if (itemToExclude == "lastJack"){
            const exclusionaryArr = inputArr.filter(item => item !== itemToExclude);
            const chosenIndex = (getRandInt(0, exclusionaryArr.length - 1))
            lastJackGif = exclusionaryArr[chosenIndex]
            return exclusionaryArr[chosenIndex]
        } else if (itemToExclude == "lastMiss"){
            const exclusionaryArr = inputArr.filter(item => item !== itemToExclude);
            const chosenIndex = (getRandInt(0, exclusionaryArr.length - 1))
            lastMiss = exclusionaryArr[chosenIndex]
            return exclusionaryArr[chosenIndex]
        } else{
        // if no prior item is to be excluded, get a true random result
        // as the default param, this will just be assumed random unless an exclusion item is passed to it
        const chosenIndex = (getRandInt(0, inputArr.length - 1));
        return inputArr[chosenIndex];
    }
}
  
// manage the population of values here
function getSpaceValue(intMin, intMax){
    let d10Roll = getRandInt(intMin, intMax);
    if ((d10Roll == 1) || (d10Roll) == 2) {
        return [d10Roll, "Jack"]
    } else if ((d10Roll == 3) || (d10Roll) == 4) {
        return [d10Roll, "Queen"]
    } else if ((d10Roll == 5) || (d10Roll) == 6) {
        return [d10Roll, "King"]
    } else {
        console.log(`Anomaly occurred on dice roll (result of roll) => ${d10Roll} `)
    }
}

// expects and input Int. & gives an output array of tha many random numbers 
//    all will be between the intMin and intMax provided
function getArrayOfRandNums(arrSize=10, intMin=1, intMax=6){
    outArr = []
    for (let i = 1; i < arrSize; i++) {
        let rolledInfo = getSpaceValue(intMin, intMax)
        let rollVal = rolledInfo[0]
        let rolledIcon = rolledInfo[1]
        outArr.push(rolledIcon)
        // console.log(`Rolled ${rollVal} => ${rolledIcon}`);
      }
    return outArr
}


// assign indexes of output arr to correlate to the 9 slots available

// visual reference:
            // 0, 1, 2
            // 3, 4, 5
            // 6, 7, 8

const validLines = [
    [0, 1, 2], // topRow
    [3, 4, 5], // middleRow
    [6, 7, 8], // bottomRow
    [0, 4, 8], // hiToLoDiagonal
    [6, 4, 2]  // loToHiDiagonal
    // naught: [1, 3, 5, 7],
    // cross: [0, 2, 4, 6, 8]
    // zags, like 0, 4, 2 paying half?
]

const pointPayouts = {
    "Jack": 10,
    "Queen": 15,
    "King": 20
};

function determineLineName(lineIdx){
    if (lineIdx == 0){
        return "Top Row"
    } else if (lineIdx == 1){
        return "Middle Row"
    } else if (lineIdx == 2){
        return "Bottom Row"
    } else if (lineIdx == 3){
        return "High-to-low diagonal"
    } else if (lineIdx == 4){
        return "Low-to-high diagonal"
    } 
}

function playAudio(audioElement) {
    return new Promise((resolve, reject) => {
        // Ensure the input is a valid HTMLAudioElement
        if (!(audioElement instanceof HTMLAudioElement)) {
            return reject(new Error("Invalid audio element provided."));
        }
        // Test if the audio element is ready to play
        audioElement.addEventListener('canplaythrough', () => {
            audioElement.play().catch(reject); // Attempt to play the audio
        }, { once: true });
        // Resolve the promise when the audio ends
        audioElement.addEventListener('ended', resolve, { once: true });
        // Reject the promise if an error occurs
        audioElement.addEventListener('error', () => {
            reject(new Error("Audio failed to play or load."));
        }, { once: true });
    });
}

function updateColumn(columnIndex, spinResult, sound, playBtnId, final = false) {
    const slotDivs = document.querySelectorAll('.slot');
    for (let i = columnIndex; i < 9; i += 3) {
        const item = spinResult[i];
        const slotDiv = slotDivs[i];
        slotDiv.className = 'slot'; // Remove spinning effect
        if (item == "King") {
            slotDiv.innerHTML = `<img class="slot-icon" src=${kingIcon} alt="${item}">`;
        } else if (item == "Queen") {
            slotDiv.innerHTML = `<img class="slot-icon" src=${queenIcon} alt="${item}">`;
        } else if (item == "Jack") {
            slotDiv.innerHTML = `<img class="slot-icon" src=${jackIcon} alt="${item}">`;
        } else {
        slotDiv.innerHTML = `<img src="" alt="${item}">`;
        }
    }
    
    // use a boolean input on the laast one as the last param, "true" when it's the last reel
    if (final) {
        calculatePayout(spinResult, playBtnId);
    } else {
        // if it's not the final, use the sound as an aud source and play it for the reel-stopping sound
        sound.play();
    }
}

function manageSoundAndImgFromIconResult(arrOfLinesHit, playBtnId){
    console.log("-------------------")
    console.log(arrOfLinesHit)
    console.log("----^^-------------")
    // None of these will have more than one icon, as triggering the audio for that is handled separately
    // and should not reach this point.
    // -- all of these inut arrs will have at least one item populated in them

    // arrOfLinesHit[1] contains the icon name like "queen" to be managed
    // queen multi-hit
    if (arrOfLinesHit.length == 5){
// blackout jackpot
        console.log("All-on-one Jackpot hit! But wait... this shouldn't be triggering...")
        jackpotAud.play()
        
    } else if ((arrOfLinesHit.length > 1) && (arrOfLinesHit[0][1] == "King" )) {
// king multi-hit
// EXAMPLE:
        // contol audio for this conditional
        kingMultiAud.play()
        // control image display for this conditional
        slideToShowGif(kingMultiVictoryGif, "shrink-up", "slide-up", playBtnId, 4500)
    } else if ((arrOfLinesHit.length > 1) && (arrOfLinesHit[0][1] == "Queen" )) {
// queen multi-hit
        queenMultiAud.play()
        slideToShowGif(queenMultiVictoryGif, "shrink-up", "slide-up", playBtnId, 3800)
    }  else if ((arrOfLinesHit.length > 1) && (arrOfLinesHit[0][1] == "Jack" )) {
// Jack multi-hit
        jackMultiAud.play()
        /// !!---------------------------------------------------
// proof of concept to have animation from a set of possible animations
        /// !!---------------------------------------------------
        const randomJackGif = getRandItemFromArr(rogerArr, "lastJack")
        slideToShowGif(randomJackGif, "shrink-up", "slide-up", playBtnId, 2400)    
    }  else if (arrOfLinesHit[0][1] == "King" ) {
// king single
        kingSingleAud.play()  
        slideToShowGif(kingSingleVictoryGif, "shrink-up", "slide-up", playBtnId, 2600)
    }  else if (arrOfLinesHit[0][1] == "Queen" ) {
// queen single
        queenSingleAud.play()
        slideToShowGif(queenSingleVictoryGif, "shrink-up", "slide-up", playBtnId, 2000)
    }  else if (arrOfLinesHit[0][1] == "Jack" ) {
// Jack single
        jackSingleAud.play()
        slideToShowGif(jackSingleVictoryGif, "shrink-up", "slide-up", playBtnId)
    } else {
        console.log("-- 004 --- Check logic, this shouldn't trigger, and the hit array should be populated")
        console.log(`${arrOfLinesHit}`)
    }
    if (arrOfLinesHit.length > 1) {
        console.log(`-- 006 -- Multi for ${arrOfLinesHit[0][1]} should have triggered ... `)
    } else {
        console.log(`-- 007 --${arrOfLinesHit[1]} should have triggered ... `)
    }
    //NYI for different transition animations?
    // also not managed different timing for the gifs yet
}

function handleSpinningReels(spinResult, playBtnId){
    console.log(`btn id is => ${playBtnId}`)
    const button = document.getElementById(playBtnId);
    button.disabled = true; // Disable the button
    // select and play a random initial sound from the starting audio arr
    // ! - plays IMMEDIATELY when the spin button is clicked
    const startAudChosen = getRandItemFromArr(startAudArr) 
    startAudChosen.play()
    const payoutResultDiv = document.getElementById('payout-result');
    payoutResultDiv.innerHTML = 'spinning...'
    // could do an arr for multiple spin motions
    let spinningGif = getRandItemFromArr(spinImgArr)
    displaySpinBG(spinningGif)

    const slotMachine = document.getElementById('slot-machine');
    slotMachine.innerHTML = '';
    // Initially render empty slots with spinning effect
    for (let i = 0; i < 9; i++) {
        const slotDiv = document.createElement('div');
        slotDiv.className = 'slot spinning';
        slotMachine.appendChild(slotDiv);
    }

    // Delay logic for column reveals
    setTimeout(() => {
        updateColumn(0, spinResult, firstColumnHitSound, playBtnId);
        setTimeout(() => {
            updateColumn(1, spinResult, secondColumnHitSound, playBtnId);
            setTimeout(() => {
                updateColumn(2, spinResult, resultSoundsObj, playBtnId, true);
            }, 500);
        }, 500);
    }, 500);
}

    function checkForAllOneItem(arr){
        // will return true if the board is blacked out as one value
        jackpotHit = arr.every(value => value === firstValue)
    }

    function calculatePayout(spinResult, playBtnId) {
        // let jackpotHit = false
        let twoTypesHit = false
        let totalPoints = 0;
        let hitLines = [];
        let uniqueIcons = new Set();
        let idxCounter = 0
        let hilitItemsCounter = 0
        // Check for matches in valid lines
        validLines.forEach(line => {
            const [a, b, c] = line;
            if (spinResult[a] === spinResult[b] && spinResult[b] === spinResult[c]) {
                const iconHit = spinResult[a];
        // mention the index of the line (relting to the valid lines arr)
            // also note which icon got hit
                const tempArr = [determineLineName(idxCounter), iconHit];
                hitLines.push(tempArr);

                line.forEach(index => {
                    const slotDivs = document.querySelectorAll('.slot');
                    const slotDiv = slotDivs[index];
                    slotDiv.classList.add('highlight');
                    hilitItemsCounter += 1
                    slotDiv.classList.add('grow');
                
                    setTimeout(() => {
                        slotDiv.classList.remove('grow');
                    }, 600);
                });
                uniqueIcons.add(iconHit);
            }
            idxCounter += 1
        });
        // Calculate base points
        hitLines.forEach(hit => {
            console.log(`hit item payout --> ${pointPayouts[hit[1]]} for a ${hit[1]}`)
            totalPoints += pointPayouts[hit[1]];
        });
        
        let lineMultiplier = 1
        // Apply line-based multiplier
        if (hitLines.length > 1) {
            lineMultiplier = Math.pow(2, hitLines.length - 1);
            totalPoints *= lineMultiplier;
        }
    
        // Apply multi-item multiplier
// need to check for jackpots first
        if ((uniqueIcons.size === 2) && (hilitItemsCounter == 9)){
            // not so hard, but can get cover-all otherwise too
            totalPoints *= 3
            jackpotHit = true
            jackpotAud.play()
            slideToShowGif(jackpotVictoryGif, "shrink-up", "slide-up", playBtnId, 4800)
        } else if (uniqueIcons.size === 2) {
            mixHitAud.play()
            twoTypesHit = true
            totalPoints *= 2; // Two different types
            slideToShowGif(mixHitVictoryGif, "shrink-up", "slide-up", playBtnId, 3000)
        } else if (uniqueIcons.size === 3) {
            totalPoints *= 10; // Three different types, this is really hard to get
            jackpotHit = true
            jackpotAud.play()
            slideToShowGif(jackpotVictoryGif, "shrink-up", "slide-up", playBtnId, 4800)
        } else if ( (hilitItemsCounter > 13 )){
            // criss-crossing for 15 hilights will mean one item covers the entire board
    //  the all-in-one chance of a jackpot
            // not so hard, but can get cover-all otherwise too
            totalPoints *= 4
            jackpotHit = true
            jackpotAud.play()
            slideToShowGif(jackpotVictoryGif, "shrink-up", "slide-up", playBtnId, 4800)
        } else {
            // check for which lines were hit to play the right audio
            if (hitLines.length < 1){
                const missAudChosen = getRandItemFromArr(missAudArr, "lastMiss") 
                console.log(missAudChosen)
                missAudChosen.play()
                // if it's a miss, then quickly change the bg back to the basic
                const displayScreen = document.getElementById('top-img');
                displayScreen.style.backgroundImage = 'url(./img/ship1.png)';
                try {
                    const lingeringTextOverlay = document.getElementById('text-overlay-id'); 
                    lingeringTextOverlay.remove();
                } catch {
                    console.log("text-overlay is already removed")
                }
                // can add a temporary "miss" bg image, to revert to the ship with a timeout
                // can do logic for making a special thing on 3 misses in a row...
            } else {
                // NYI: if mixed lines like Jack-Queen play special sound (at top of if-cascade so high priority)
                // NYI logic for checking different icons being hit, like single jack or multi jack needs own function
                manageSoundAndImgFromIconResult(hitLines, playBtnId)
            }  
        }

        displayOutputHits(hitLines, totalPoints, lineMultiplier, twoTypesHit)
        //  NYI usee hitLines.length for seeing how many lines were hit...
        // use twoTypesHit to control output image?
        // 
        // console.log(`multiplication amount => x${lineMultiplier}`)
    }
function displayOutputHits(hitLines, totalPoints, lineMultiplier, twoTypesHit){
    const payoutResultDiv = document.getElementById('payout-result');
        payoutResultDiv.innerHTML = '';
    
    if (hitLines.length > 0) {
        hitLines.forEach(hit => {
            console.log(`****** hit info = index should be => `)
            payoutResultDiv.innerHTML += `<p class="line-hit">${hit[0]} of ${hit[1]}s - Points: ${pointPayouts[hit[1]]}</p>`;
        });

        // if (multiplier === 100) {
        //     payoutResultDiv.innerHTML += `<p class="line-hit">Jackpot!</p>`;
        // }
        if (lineMultiplier > 1) {
            payoutResultDiv.innerHTML += `<p>Multi-line bonus!  x${lineMultiplier}</p>`
        }
        if (twoTypesHit == true) {
            payoutResultDiv.innerHTML += `<p>Different Suit bonus! x2</p>`
        }
        // regardless of exceptional hits, mention total points
        
        payoutResultDiv.innerHTML += `<p>Total Winnings: ${totalPoints}</p>`;
        // update points to local storage
        currentPointsTotal = parseInt(currentPointsTotal) + totalPoints;
        pointsDisplay.textContent = currentPointsTotal + " points";
        localStorage.setItem('number', currentPointsTotal);
        
    } else {
        payoutResultDiv.innerHTML = '<p class="miss">Miss! (lost 5 points on the spin) </p>';
        // re-enable the spin button since it ain't getting reset here
        const spinbtn = document.getElementById('spin-btn1');
        spinbtn.disabled = false;
    }
}

    function slideToShowGif(backgroundUrl, topAnimationClass, bottomAnimationClass, playBtnId, delayTime=1800) {
        const topImg = document.querySelector('.top-img');
        const bottomImg = document.querySelector('.bottom-img');

        // Set the new background and ensure .gif restarts
        bottomImg.style.background = `url('${backgroundUrl}?${new Date().getTime()}') no-repeat center/cover`;

        // Start the animation
        topImg.classList.add(topAnimationClass);
        bottomImg.classList.add(bottomAnimationClass);

        // Wait 1.2 seconds for the animation to complete
        setTimeout(() => {
            // Reverse the animation
            topImg.classList.remove(topAnimationClass);
            bottomImg.classList.remove(bottomAnimationClass);
            const button = document.getElementById(playBtnId);
            button.disabled = false; // Disable the button
            // Re-enable the button after the full animation cycle
        }, delayTime);
    }
    
    function displaySpinBG(imgpath) {
        const displayScreen = document.getElementById('top-img');
        displayScreen.style.backgroundImage = `url(${imgpath})`;
        const overlay = document.createElement('div');
        overlay.className = 'text-overlay';
        overlay.id = "text-overlay-id"
        overlay.textContent = "- spinning -"
        displayScreen.appendChild(overlay);
        // Remove the overlay after the GIF has played (assume 3 seconds duration)
        setTimeout(() => {
            displayScreen.style.backgroundImage = 'url(./img/ship1.png)';
            overlay.remove();
        }, 2200);
    }

    document.getElementById('spin-btn1').addEventListener('click', async () => {
        const randomSpin = getArrayOfRandNums(); // This returns the 3x3 spin result, an array 9 items long
        // costs 5 to spin, so if greater than 4, you can spin
        //gibbon
        if (currentPointsTotal > 4){
            handleSpinningReels(randomSpin, 'spin-btn1');
            currentPointsTotal = parseInt(currentPointsTotal) - 5;
            pointsDisplay.textContent = currentPointsTotal + " points";
            localStorage.setItem('number', currentPointsTotal);
        } else {
            pointsDisplay.textContent = currentPointsTotal + " points is too few to spin! Buy more chips, please!";
        }
    });

    document.getElementById("jack-single").addEventListener('click', async () => {
        handleSpinningReels(["Jack", "Jack", "Jack", "King", "Queen", "King", "Queen", "Queen", "Jack"],
        "jack-single")});
    document.getElementById("jack-multi").addEventListener('click', async () => {
        handleSpinningReels(["Jack", "Jack", "Jack", "King", "Jack", "King", "Queen", "Jack", "Jack"],
        "jack-multi")});
    document.getElementById("queen-single").addEventListener('click', async () => {
        handleSpinningReels(["Jack", "Jack", "Queen", "King", "Jack", "King", "Queen", "Queen", "Queen"],
        "queen-single")});
    document.getElementById("queen-multi").addEventListener('click', async () => {
        handleSpinningReels(["Jack", "Jack", "Queen", "King", "Queen", "King", "Queen", "Queen", "Queen"],
        "queen-multi")});
    document.getElementById("king-single").addEventListener('click', async () => {
        handleSpinningReels(["Jack", "Queen", "Queen", "King", "King", "Jack", "King", "King", "King"],
        "king-single")});
    document.getElementById("king-multi").addEventListener('click', async () => {
        handleSpinningReels(["Jack", "Queen", "Queen", "King", "King", "King", "King", "King", "King"],
        "king-multi")});
    document.getElementById("mix-multi").addEventListener('click', async () => {
        handleSpinningReels(["Queen", "Queen", "Queen", "King", "Queen", "Jack", "King", "King", "King"],
        "mix-multi")});
    document.getElementById("jackpot").addEventListener('click', async () => {
        handleSpinningReels(["King", "King", "King", "King", "King", "King", "King", "King", "King"],
        "jackpot")});
    
