# vanillaJS_RPG_tools
ttrpg tools and other quirky stuff coded in javascript with no bells or whistles.

INCLUDED PROGRAMS:

1) Novel Tarot -
   OVERVIEW: Very simple GUI helping with randomizing different story elements for outlining, as well as simply picking random tarot cards. The whole purpose is to pick random strings associated with tarot symbolism and slot them in with different story-building elements. The buttons along the top represent these functionalities, with the obvious "clear" button on the far right doing just that and resetting the output to a blank screen (it will ask to confirm before clearing, so you don't lose a good roll).
   - Quick 3 cards - draws 3 random cards and displays the tarot information for them
   - Character designer - has 14 traits indicated by the first phrase in each line. Used to design characters, based on the increasing depth chart (first 7 being basic for side characters, and latter 7 being more detailed). Note that the appearance motif is my quick-cheat for throwaway characters, looking at lines 1, 2, and the last for quick improv.
   - Init shotty - (The initial shotgun) refers to a handful of vague plot points in how I employ a version of the snowflake outline. A few crucial elements of an overall stroy arc are intended to be summarized in just one sentence for each of the elements. This just lays out that initial pattern very quickly.
   - Foil Char Pair - Lines up two characters side-by-side with the intention of helping to make complementing or contrasting characters (referring to the literary device of a foil).
   - 8 point plot - Aother layer of depth to the modded snowflwake outline, 1 sentence should be associated with each of the 8 primary phases of a story arc.
   - 24 ptPlotOutline - This is a detailed list of story scenes for a complete novel, which is later elaborated on by the 72 point plot outline, breaking each scene into 3 beats. While as a snowflake, this all starts as just one sentence each, it allows for much more structure than other outline methods. Just remember that each point is roughtly the same amount, at least in theory, for proper pacing. The purpose of organizing the scenes so is because of PACING either making or breaking a book.
   - EXTRA HIDDEN TRICK - How to do the 72 point plot outline? -> Copy the 24 point plot outline, then draw 3 cards for each of those points. Every scene has 3 beats, but it's best to approach it in small chunks.
   
2) Card Maker - (upload your own images into TTRPG cards easily)
   OVERVIEW - Intended to make a trading card-like template for characters and monsters for reference in TTRPGs. The sample is completely editable, but the defaults refer to typical DnD stats you'd expect in 5e at low level. The nun is a placeholder... not really related to anything.
   USAGE - Allows you to UPLOAD YOU OWN IMAGE onto the card, along with any custom data you want
   420 px is the optimal image height, with portrait-layout preferred 3:2 ratio height to width, though squares work too. Landscape won't be nice on the format though.
   The defaults in the generation box just help to speed things up with the typical core stats.
   All main fields are editable on the output card, but I expect everything to have stats and actions at a bare minimum, thus those fixed fields.
   If you want to save it, I recommend doing a screenshot. I don't really have a "print-card" functionality to this...

----

devlog -

2 Jan 2025 ---
update the files for Tarot generator, begin documentation of included program sets

1 Jan 2025----
Upploaded the card-map (based on a deck of playing cards and an object-mapping currently, but could be converted to just use an array)
makes 5x5 grid of connected room instances at fixed percentage chance for things to spawn
Mapping of card name to room name complete, so it will be the room name suggestions that appear in the html display
All code for JS and CSS is self-contained in the html file, currently

-- 21 Dec (evening) ----
Tarot information moved to its own set of html and JS. 
The html poriton is uploaded, JS data under revision.

--- 21 Dec 2024 -----------------------------------

Monster maker adjusts defensive balance, making a bell curve from rolling 4d6, and based on the variation from 14 at the center increases/decreases AC by 1 and inversely HP by 10%.
Thus, a monster with +1 ac gets -10 of it's standard HP for it's base ranking.
NYI: offensive stat changes...
Output can go to the screen, but is commented out; data is shown in console.log's while testing
! - I have commented out a section that shows how to make the display of the output in a DIV; as this takes a long time to reformat, i will only be using console.log until a final output style is decided upon.

Added baseAbility to work like STR, DEX, etc. average for a mon of that CR.

Tarot card stuff is clutter, but is intended for a whacky integration down the line; obviously the tarot information is lacking in completion.

--- 16 Dec. 2024 ----------------------------------
updated some formatting issues in CSS before uploading card_template files to github
the dummy card will not

--- 15 Dec. 2024 ----------------------------------
Card template trio made (js, html, css) 
- Inputs allow for info that gets translated into a trading-card template.
- Newly generated items will spawn in a list below prevously generated ones.
- Image input is formatted correctly on the frame (using a background image for the border)
- Intended as info cards for enemies (so I could print things out and be more interesting)
  *Known issue - Card is a fixed height, so excessive info will "run on"
  - different formatting for extra info in an initiative tracker is planned.
  

--- 10 Dec. 2024 ----------------------------------

Best achievement: multiple characters object data displayed; can direct one character to attack another and HP dynamically update on screen through use of proxy objects

Attack resolves and dynamically updates character HP, so bob’s HP gets updated when hit
Console.log will report on negative excess damage, but it’s reset to 0 so there is no negative HP displayed.

Basic display background to indigo and yellow default text color added,
Using borders to make the text sections clearer (eg 3px border of lime around stat labels)
Column formatting with wraparound for rows of a specified length added.
Names and HP display prominently at the top of each character section

Added class to names so the object trait “is_hero” can be set to “hero” or “enemy” or “neutral”
NYI no special color for neutral so it will stay the default yellow

Made a function compareRolls() that makes Alice attack Bob; simulates a simple (one-sided) attack sequence.
-checks Accuracy Vs Evasion, then Damage vs Armor
-Dice pools related to levels work appropriately

Stats can be updated in the window to increase or decrease numbers, and this will be reflected in the attack calculation

--- 9 Dec 2024 ----------------------------------
  [!] Important - Dice pool structure created for dice pools with n+0.5 average outcome where n is the key to the object.
    example: rank 10 gives 3d6, averaging to 10.5 from those dice rolls.
    This dice pool is the center for resolving all game contests.
    Different stats based on skills and equipment are NYI, but the totals from that will be represented in the character objects.
    Currently fixed numbers, these could be tracked with comments and such.... unsure how to manage this dynamically...

  basic objects hold hard-coded character data for Alice and Bob as dummy items
  make a basic attack calculation button for Alice attacking Bob.
    - correctly goes through the following details:
      1) Accuracy for attacker Vs. defender's Evasion
      2) if hit, Attacker's Damage roll Vs. Defender's Armor
      3) if damage exceeds armor roll
