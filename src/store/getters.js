export default {
  currentItem(state) {
    return state.history[state.history.length - 1];
  },
};
