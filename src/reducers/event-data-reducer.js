const eventData = {
  intro : {
    eventName: 'Begin Again',
    eventInitialText: 'Welcome to your adventure.',
    optionOne: {
      buttonText: 'Head West'
    },
    optionTwo: {
      buttonText: 'Head East'
    },
    optionThree: {
      buttonText: 'Head North'
    }
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
    eventName: 'A Grassy Knoll 2',
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
  1000003 : {
    eventName: 'A Grassy Knoll 3',
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
  1000004 : {
    eventName: 'A Grassy Knoll 4',
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
  1000005 : {
    eventName: 'A Grassy Knoll 5',
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
  1000006 : {
    eventName: 'A Grassy Knoll 6',
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
  1000007 : {
    eventName: 'A Grassy Knoll 7',
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
  1000008 : {
    eventName: 'A Grassy Knoll 8',
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
  1000009 : {
    eventName: 'A Grassy Knoll 9 ',
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
  10000010 : {
    eventName: 'A Grassy Knoll 10',
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
  2000001 : {
    eventName: 'A Grassy Knoll 1-2',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll'
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll'
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll'
    }
  },
  2000002 : {
    eventName: 'A Grassy Knoll 2-2',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll'
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll'
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll'
    }
  },
  2000003 : {
    eventName: 'A Grassy Knoll 3-2',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll'
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll'
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll'
    }
  },
  2000004 : {
    eventName: 'A Grassy Knoll 4-2',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll'
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll'
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll'
    }
  },
  2000005 : {
    eventName: 'A Grassy Knoll 5-2',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll'
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll'
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll'
    }
  },
  2000006 : {
    eventName: 'A Grassy Knoll 6-2',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll'
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll'
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll'
    }
  },
  2000007 : {
    eventName: 'A Grassy Knoll 7-2',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll'
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll'
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll'
    }
  },
  2000008 : {
    eventName: 'A Grassy Knoll 8-2',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll'
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll'
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll'
    }
  },
  2000009 : {
    eventName: 'A Grassy Knoll 9-2',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll'
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll'
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll'
    }
  },
  20000010 : {
    eventName: 'A Grassy Knoll 10-2',
    eventInitialText: 'A Gnoll, but it is covered in grass.',
    optionOne: {
      buttonText: 'Sneak Past The Gnoll'
    },
    optionTwo: {
      buttonText: 'Punch The Gnoll'
    },
    optionThree: {
      buttonText: 'Try and Distract The Gnoll'
    }
  }
};

export default (state = eventData, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
