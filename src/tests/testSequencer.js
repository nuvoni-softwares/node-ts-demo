// eslint-disable-next-line @typescript-eslint/no-var-requires
const Sequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends Sequencer {
  /**
   * @param {Iterable<any> | ArrayLike<any>} tests
   */
  sort(tests) {
    const copyTests = Array.from(tests);

    return copyTests.sort((testA, testB) => {

      //Roda primeiro
      if (testA.path.indexOf('index.test') > 0) return -1
      if (testB.path.indexOf('index.test') > 0) return 1

      return (testA.path > testB.path ? 1 : -1)
    });
  }
}

module.exports = CustomSequencer;