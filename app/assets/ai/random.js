// I always choose between taking and saying no thanks at random!
function randomValue() {
  return Math.random() + 1 - .5;
}
export default {
  predict(options, state) {
    return options.map((action) => {
      return {
        action, value: randomValue()
      };
    });
  }
}