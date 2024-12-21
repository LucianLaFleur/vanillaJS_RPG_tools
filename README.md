# vanillaJS_RPG_tools
ttrpg tools and other quirky stuff coded in javascript with no bells or whistles.


devlog -

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
