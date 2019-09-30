import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    token: '',
    network: true
  },
  mutations: {
    loginSuccess(state, newValue) {
      state.token = newValue;
    },
    changeNetwork(state, newValue){
        state.network = newValue;
    }
  },
  actions: {
    commit(context, value) {
      context.commit('loginSuccess', value);
    }
  }
});
