# vanillaJS_RPG_tools
ttrpg tools and other quirky stuff coded in javascript with no bells or whistles.


devlog -
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
