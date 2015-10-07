// I choose at random with a bias towards No Thanks!

const noThanksOdds = .65;

function randomValue() {
  return Math.random();
}
export default {
  predict(options, state) {
    return options.map((action) => {
      switch(action) {
        case 'take':
          return {action, value: randomValue()};
        case 'noThanks':
          return {action, value: noThanksOdds};
      }
    });
  }
}