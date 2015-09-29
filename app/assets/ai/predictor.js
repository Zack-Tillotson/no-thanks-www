
export default {
  predict() {
    return [{
      action: 'take',
      value: 1
    }, {
      action: 'noThanks',
      value: 1
    }].sort((a,b) => Math.random() - .5);
  }
}