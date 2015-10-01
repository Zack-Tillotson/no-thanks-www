// I always say No Thanks! whenever I can.

export default {
  predict(options, state) {

    // 0 value when out of money
    const noThanksValue = state.players.list[state.players.currentPlayer].money;
    
    return options.map((action) => {
      switch(action) {
        case 'take':
          return {action, value: 0.5};
        case 'noThanks':
          return {action, value: noThanksValue};
      }
    });
  }
}