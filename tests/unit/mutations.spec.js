import mutations from '../../src/store/mutations';

describe('positionPlus', () => {
  it('position = position + 1', () => {
    const state = {
      position: 0,
    };

    mutations.positionPlus(state);

    expect(state).toEqual({
      position: 1,
    });
  });
});

describe('putData', () => {
  it('putData', () => {
    const data = {
      status: 'fail', position: 1, duration: 354,
    };
    const state = {
      history: [],
    };

    mutations.putData(state, data);

    expect(state).toEqual({
      history: [undefined, {
        status: 'fail', position: 1, duration: 354,
      }],
    });
  });
});

describe('setTimer', () => {
  it('setTimer', () => {
    const timer = null;
    const state = {
      timer: {},
    };

    mutations.setTimer(state, timer);

    expect(state).toEqual({
      timer: null,
    });
  });
});
