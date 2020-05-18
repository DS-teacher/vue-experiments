import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "BO",
      address: "956"
    }
  },
  mutations: {
    changeAddress(state, data) {
      state.user.address = data;
    },
    changeName(state, data) {
      state.user.name = data;
    }
  },
  actions: {
    changeName({ commit }, data) {
      commit("changeName", data);
    }
  },
  modules: {}
});
