import Vue from 'vue';
import Vuex from 'vuex';

// モジュールシステムで使用するための記述
Vue.use(Vuex);

const state = {
  slackUrl: 'https://join.slack.com/t/ayahoshino/shared_invite/enQtNzMyMjc4NzYxMjU1LTg0NDhhYWIzMmVmZjRlMDA0MmQ5NzNiY2ZlOGU3NjBlNzMxY2Q0MjVlOThjZjU2NGUwZTZhN2U2NzM2ZDc4YmM',
  dribbbleUrl: 'https://dribbble.com/shospnhay',
  linkedinUrl: 'https://www.linkedin.com/in/aya-hoshino-69b278151/',
  githubUrl: 'https://github.com/hsna228',
  containerHeight: 0,
};

const modules = {
  updateContainerHeight(height) {
    state.containerHeight = height;
  },
};

const store = new Vuex.Store({
  state,
  modules,
});

export default store;
