import Vue from 'vue';
import Vuex from 'vuex';

// モジュールシステムで使用するための記述
Vue.use(Vuex);

const state = {
  facebookUrl: 'https://www.facebook.com/jas.lol2',
  dribbbleUrl: 'https://dribbble.com/shospnhay',
  linkedinUrl: 'https://www.linkedin.com/in/aya-hoshino-69b278151/',
  githubUrl: 'https://github.com/hsna228',
};

const modules = {
};

const store = new Vuex.Store({
  state,
  modules,
});

export default store;
