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
</br> In the .js file, I use the line `const randomJackGif = getRandItemFromArr(jackArr, "lastJack") ` to generate a random gif to display. 
</br>Basically, you just need to do this before the other items that you want random multiple images to be selected from, as this is the mechanism of random selection from an arr 
</br>(assuming you also made an arr, like queenArr instead of jackArr in the example above).

- Spin image (images to display during the "spinning" phase, while the slot reels are "turning")
</br>"./img/spin1.gif", "./img/spin2.gif", "./img/spin3.gif""
</br>
<h2> Audio file documentation </h2>
</br>can make more audio elements and add the variables to "startAudArr"; these will randomly be selected from when hitting the start button.
</br>(Reduce this to only one item to get a consistent, single starting sound.)
</br>./aud/startAud1.wav
</br>./aud/startAud2.wav
</br>./aud/startAud3.wav
</br>
- Columns 1 and 2 will each trigger a sound. (can set the attached variables to the same source to make it consistent)
</br>./aud/col1Hit.wav
</br>./aud/col2Hit.wav
 -(Column 3 will trigger either a win noise related to the item that won, or it will make the miss noise)
</br>
- various victory sounds 
</br>./aud/jackSingle.wav
</br>./aud/jackMulti.wav
</br>./aud/queenSingle.wav
</br>./aud/queenMulti.wav
</br>./aud/kingSingle.wav
</br>./aud/kingMulti.wav
</br>./aud/mixHit.wav
</br>./aud/jackpot.wav
</br>
---
</br>
</br>Note:
</br>The images shown in the accompanying demo video were themed after star-wars, but that's licensed, so there's issues with posting things.
</br>For educational purposes only.
