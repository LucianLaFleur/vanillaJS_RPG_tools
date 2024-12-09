# vanillaJS_RPG_tools
ttrpg tools and other quirky stuff coded in javascript with no bells or whistles.


devlog -

9 Dec 2024
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
