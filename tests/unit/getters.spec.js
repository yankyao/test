import getters from '../../src/store/getters';

const history = [{
  status: 'fail', position: 0, duration: 354,
}, {
  status: 'fail', position: 1, duration: 354,
}];

const state = { history };
describe('currentItem', () => {
  it('returns currentItem', () => {
    const actual = getters.currentItem(state);

    expect(actual).toEqual(history[1]);
  });
});
