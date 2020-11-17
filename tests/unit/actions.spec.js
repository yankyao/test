import actions from '../../src/store/actions';

let url = '';
let mockError = false;

jest.mock('axios', () => ({
  get: (_url) => new Promise((resolve) => {
    if (mockError) throw Error('Mock error');
    url = _url;
    resolve({
      status: 200,
      data: {},
    });
  }),
}));

describe('pullDataFromGithub', () => {
  const commit = jest.fn();
  const state = {
    position: 0,
  };
  it('pullDataFromGithub success', async () => {
    await actions.pullDataFromGithub({ commit, state });

    expect(url).toBe('https://api.github.com​');

    expect(commit).toHaveBeenCalledWith(
      'putData', {
        position: 0,
        status: 'loading',
      },
    );
  });

  it('pullDataFromGithub fail', async () => {
    mockError = true;
    await actions.pullDataFromGithub({ commit, state });
    expect(commit).toHaveBeenCalledWith(
      'putData', {
        position: 0,
        status: 'loading',
      },
    );
  });
});
