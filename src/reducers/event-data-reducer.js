const eventData = {
  intro : {
    eventName: 'Begin Again',
    eventInitialText: 'Welcome to your adventure.',
    optionOne: {
      buttonText: 'Head West',
      eventType: 'healing',
      healthText: 'You strike out Westward as you begin your journey...',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Head East',
      eventType: 'healing',
      healthText: 'You head confidently Eastward as you begin your journey...',
      healing: 0
    },
    optionThree: {
      buttonText: 'Head North',
      eventType: 'healing',
      healthText: 'North? Really? Okay, well good luck on your journey...',
      healing: 0
    }
  },
  gameover : {
    eventName: 'Game Over',
    eventInitialText: 'You kicked the bucket.'
  },
  1000001 : {
    eventName: 'A Grassy Gnoll',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'It spotted you! You take two points of damage in the ensuing tussel, but you learn a little something about being sneaky (+1 sneaky)',
      missDamage: 2,
      tieText: 'You take your time, and almost make it by, but the roar the Gnoll lets loose when it finally does see you actually, physically harms you for one point of damage. You learn something about being a better sneaker (+1 sneaky)',
      tieDamage: 1,
      successText: 'That lump of grass is no wiser, and neither is the Gnoll. You sneak past with no problem, and learn something about being sneaky in the process (+1 sneaky)',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll',
      eventType: 'fight',
      missText: 'That was not very smart. The Gnoll smacks you away as you advance, causing 2 points of damage. At least you are past the Grassy Gnoll, right?',
      missDamage: 2
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You throw a stone to try and distract the Gnoll, but end up hitting it in the face. Unhappy Gnoll makes for a damaged Rogue, take two points of damage, however you do learn something about how distractions should work (+1 cunning)',
      missDamage: 2,
      tieText: 'You carefully aim and throw a rock beyond the Gnoll to try and draw its attention away. The Gnoll, surprised by the rock is momentarily shocked, but not long enough for you to get by without being swatted at. Take one point of damage, and learn something about how distractions work (+1 cunning)',
      tieDamage: 1,
      successText: 'After evaluating your surroundings you decide to throw a rock at a large tree near the Gnoll. The rock hitting the tree causes a loud bang, and several fruits drop from the tree taking the Gnoll by complete surprise. You make it past unscathed, and learn a little something about effective distractions (+1 cunning)',
      healing: 0
    }
  },
  1000002 : {
    eventName: 'Farm House',
    eventInitialText: 'The smell of freshly baked bread catches your attention, and you are mighty hungry. You are going to need to eat in order to continue your journey, but there are some vicous looking dogs in the yard, so you decide to...',
    optionOne: {
      buttonText: 'Sneak up to the farm house and attempt to steal the loaf of bread you see cooling on the window',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'The yard dogs picked up on your scent right away! As you try and fend them off, the farmer comes out with his pitchfork. You take two damage, but you learn something about being sneaky around dogs (+1 sneaky)',
      missDamage: 2,
      tieText: 'You manage to get to the window and the secure the bread, however this draws the attention of the yard dogs. You manage to get away before the farmer notices, but take one damage from the dogs as you flee. You learn something about being a better sneaker (+1 sneaky)',
      tieDamage: 1,
      successText: 'The bread is yours, the yard dogs and farmer are none the wiser, and learn something about being sneaky in the process (+1 sneaky)',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Create a distraction in the yard to give you a chance to steal the bread cooling in the window',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You try to draw the dogs attention away with a distraction, but they arent having it. You take two damage as the dogs come straight for you, but you learn a little something about distractions (+1 cunning)',
      missDamage: 2,
      tieText: 'You let a nearby woodland creature loose in the yard, causing the dogs to take chase. You secure the bread, however the comotion roused the farmer and now he is after you. Take one damage fleeing, but you learn something about distractions (+1 cunning)',
      tieDamage: 1,
      successText: 'Fire! While unethical, it sure is a great way to get the whole farms attention. You set a haystack on fire, the dogs go nuts, the farmer rushes out to put it out and you make off with the bread. You learn something about how distractions should work (+1 cunning)',
      healing: 0
    },
    optionThree: {
      buttonText: 'Try and reason with the farmers, surely they will see the nobility in aiding your quest',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'After giving it your best shot the farmer is looking at you with two heads. You take two points of damage, one from the embaressment, the other from your continued hunger. This serves as a lesson on what and what not to say (+1 dashing)',
      missDamage: 2,
      tieText: 'You explain the nobility of your quest, and your need for provisions. Your wallet, and by extension you, take one point of damage in order to secure the bread, but you learn something about negotiations in the process (+1 dashing)',
      tieDamage: 1,
      successText: 'The farmer is moved by your words, and by the clear nobility of your quest. He gives you the bread, and some directions. You learn more about persuation in the process (+1 dashing)',
      healing: 0
    }
  },
  1000003 : {
    eventName: 'A Witch',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  1000004 : {
    eventName: 'A Travelling Merchant',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  1000005 : {
    eventName: 'A Beseiged Town',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  1000006 : {
    eventName: 'A Ghost in the Woods',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  1000007 : {
    eventName: 'A Peaceful Cottage',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  1000008 : {
    eventName: 'A Shepherd',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  1000009 : {
    eventName: 'A Guarded Town',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  10000010 : {
    eventName: 'A Drowning Fisherman',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  2000001 : {
    eventName: 'A Dark Cave',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  2000002 : {
    eventName: 'A Foreboding Sign',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  2000003 : {
    eventName: 'An Abandoned Castle',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  2000004 : {
    eventName: 'Two Talking Squirrels',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  2000005 : {
    eventName: 'A Guarded Bridge',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  2000006 : {
    eventName: 'Bandits!',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  2000007 : {
    eventName: 'Orcs!',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  2000008 : {
    eventName: 'Knights on the Road',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  2000009 : {
    eventName: 'Ogre!',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  20000010 : {
    eventName: 'Troll!',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  3000001 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  3000002 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  3000003 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  3000004 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  3000005 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  3000006 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  3000007 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  3000008 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  3000009 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  30000010 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  4000001 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  4000002 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  4000003 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  4000004 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  4000005 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  4000006 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  4000007 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  4000008 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  4000009 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  40000010 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  5000001 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  5000002 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  5000003 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  5000004 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  5000005 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  5000006 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  5000007 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  5000008 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  5000009 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  50000010 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  6000001 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  6000002 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  6000003 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  6000004 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  6000005 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  6000006 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  6000007 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  6000008 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  6000009 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  60000010 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  7000001 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  7000002 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  7000003 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  7000004 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  7000005 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  7000006 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  7000007 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  7000008 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  7000009 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  70000010 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  8000001 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  8000002 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  8000003 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  8000004 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  8000005 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  8000006 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  8000007 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  8000008 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  8000009 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  80000010 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  9000001 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  9000002 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  9000003 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  9000004 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  9000005 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  9000006 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  9000007 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  9000008 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  9000009 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  90000010 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  10000001 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  10000002 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  10000003 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  10000004 : {
    eventName: 'A Normal Event',
    eventInitialText: 'You encounter something that needs to get done.',
    optionOne: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  10000005 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  10000006 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  10000007 : {
    eventName: 'An Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Be sneaky',
      eventType: 'sneak',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 sneaky',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 sneaky',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 sneaky',
      healing: 0
    },
    optionThree: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    }
  },
  10000008 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  10000009 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  },
  100000010 : {
    eventName: 'Another Dangerous Event',
    eventInitialText: 'You encounter something dangerous that needs to be avoided.',
    optionOne: {
      buttonText: 'Fight',
      eventType: 'fight',
      missText: 'Fighting is not ever going to end well for you: take 2 damage',
      missDamage: 2,
    },
    optionTwo: {
      buttonText: 'Use your wit and guile',
      eventType: 'cunning',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 cunning',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 cunning',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 cunning',
      healing: 0
    },
    optionThree: {
      buttonText: 'Be a dashing rogue and try and talk your way through it',
      eventType: 'dashing',
      skillTarget: 2,
      missText: 'You do not do well: take 2 damage gain 1 dashing',
      missDamage: 2,
      tieText: 'You do Okay: take 1 damage, gain 1 dashing',
      tieDamage: 1,
      successText: 'You do great: take no damage, gain 1 dashing',
      healing: 0
    }
  }
};

export default (state = eventData, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
