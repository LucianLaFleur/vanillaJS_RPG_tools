</br>This is a template, not including any actual images or audio files because I don't have the rights to them. 
</br>You have to make a /img and /aud folder respectively, and fill them with items for the different suits
---
<h2> Documentation of image filenames: </h2>
- (icons for the screen-display of the slot machine, should be small and square, around 80 x 80 px)
</br>./img/kingIcon1.png
</br>./img/queenIcon1.png
</br>./img/jackIcon1.png
</br>
- victory gifs to display on a hit
</br>./img/singJack.gif
</br>./img/multiJack.gif
</br>./img/singQueen.gif
</br>./img/multiQueen.gif
</br>./img/singKing.gif
</br>./img/multiKing.gif
</br>./img/jackpot.gif
</br>./img/mixHit.gif
</br>
- expanded sample (only done for jacks) to get one of many possible victory screens (amount and contents can be changed in "jackArr")
- Each must item in the array must be populated with a filename to be available for the random pool to draw from when hit
</br> jackArr = ["./img/singJack.gif", "./img/singJack1.gif", "./img/singJack2.gif", "./img/singJack3.gif"]
- A similar structure to ^^ above can be applied if you have lots of victory images for queen, king, jackpot, as well. Basically, just copy the structure and apply the function to the others
</br> In the .js file, I use the line `const randomJackGif = getRandItemFromArr(jackArr, "lastJack") ` to generate a random gif to display. Basically, you just need to do this before the other items that you want random multiple images to be selected from, as this is the mechanism of random selection from an arr (assuming you also made an arr, like queenArr instead of jackArr in the example above).

- Spin image (images to display during the "spinning" phase, while the slot reels are "turning")
"./img/spin1.gif", "./img/spin2.gif", "./img/spin3.gif""


<h2> Audio file documentation </h2>
can make more audio elements and add the variables to "startAudArr"; these will randomly be selected from when hitting the start button.
Reduce this to only one item to get a consistent starting sound.
./aud/startAud1.wav
./aud/startAud2.wav
./aud/startAud3.wav

Columns 1 and 2 will each trigger a sound.
./aud/col1Hit.wav
./aud/col2Hit.wav
Column 3 will trigger either a win noise related to the item that won, or it will make the miss noise

- various victory sounds 
./aud/jackSingle.wav
./aud/jackMulti.wav
./aud/queenSingle.wav
./aud/queenMulti.wav
./aud/kingSingle.wav
./aud/kingMulti.wav
./aud/mixHit.wav
./aud/jackpot.wav

Note:
The images shown in the accompanying demo video were themed after star-wars, but that's licensed, so there's issues with posting things.
For educational purposes only.
