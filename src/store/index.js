import Vue from "vue";
import Vuex from "vuex";
import axios from "@/axios/axios.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "BO",
      address: "956"
    },
    users: [],
    exception: ""
  },
  mutations: {
    changeAddress(state, data) {
      state.user.address = data;
    },
    changeName(state, data) {
      state.user.name = data;
    },
    getUsers(state, data) {
      state.users = data;
    },
    getException(state, data) {
      state.exception = data;
    }
  },
  actions: {
    changeName({ commit }, data) {
      commit("changeName", data);
    },
    async getUsers({ commit }) {
      let resp = await axios.get("users");
      commit("getUsers", resp.data);
    },
    async getException() {
      let resp = await axios.get("nodatas");
    }
  },
  modules: {}
});
