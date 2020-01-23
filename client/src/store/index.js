import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    auth
  },
  strict: debug,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
});
