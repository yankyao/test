export default {
  positionPlus(state) {
    state.position += 1;
  },
  putData(state, data) {
    const history = Array.from(state.history);
    history[data.position] = data;
    state.history = history;
  },
  setTimer(state, timer) {
    state.timer = timer;
  },
};
