import axios from 'axios';

const GITHUB_URL = 'https://api.github.com​';
const SUCCESS = '数据获取成功';
const FAIL = '数据获取失败';
const LOADING = '获取数据中';

const getDataFromGIthub = () => new Promise(async (resolve, reject) => {
  const startTime = +new Date();
  const remoteData = {
    status: SUCCESS,
  };
  try {
    const { data, status } = await axios.get(GITHUB_URL);
    remoteData.duration = +new Date() - startTime;
    if (data && status === 200) {
      remoteData.data = data;
      resolve(remoteData);
    } else {
      remoteData.status = FAIL;
      reject(remoteData);
    }
  } catch (e) {
    remoteData.status = FAIL;
    remoteData.duration = +new Date() - startTime;
    reject(remoteData);
  }
});

export default {
  startTimeout({ dispatch, commit, state }) {
    if (state.timer) return;
    dispatch('pullDataFromGithub');
    const timer = setTimeout(() => {
      commit('setTimer', null);
      dispatch('startTimeout');
    }, 5000);
    commit('setTimer', timer);
  },
  stopTimeout({ state, commit }) {
    clearTimeout(state.timer);
    commit('setTimer', null);
  },
  pullDataFromGithub({ commit, state }) {
    const { position } = state;

    // 占位展示
    const localdata = {
      status: LOADING,
      position,
    };
    commit('positionPlus');
    commit('putData', localdata);
    getDataFromGIthub().then((res) => {
      commit('putData', { ...localdata, ...res });
    }).catch((err) => {
      commit('putData', { ...localdata, ...err });
    });
  },
};
