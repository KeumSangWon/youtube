import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import Router from "vue-router";
import router from "@/router";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user_type: 0,
    user_id: 0,
    check_login: false,
    user_info: []
  },

  getters: {
    user_id: function(state) {
      return state.user_id;
    },
    user_type: function(state) {
      return state.user_type;
    },
    check_login: function(state) {
      return state.check_login;
    },
    user_info: function(state) {
      return state.user_info;
    }
  },

  mutations: {
    user_type: (state, payload) => {
      state.user_type = payload;
    },
    user_id: (state, payload) => {
      state.user_id = payload;
    },
    check_login: (state, payload) => {
      state.check_login = payload;
    },
    user_info: (state, payload) => {
      state.user_info = payload;
    }
  },
  actions: {
    user_type: ({ commit }, payload) => {
      commit("user_type", payload);
    },

    user_id: ({ commit }, payload) => {
      commit("user_id", payload);
    },
    user_info: ({ commit }, payload) => {
      commit("user_info", payload);
    },

    check_login: ({ commit }, payload) => {
      if (payload) {
        console.log("true");
        commit("check_login", true);
      } else {
        commit("check_login", false);
        console.log("false");
        commit("check_login", payload);
      }
    },

    login: ({ dispatch }, payload) => {
      axios
        .post("http://localhost:8000/api/login", payload)
        .then(res => {
          localStorage.setItem("user_token", res.data.token);
          dispatch("getUserInfo");
          router.push({ name: "myPage" });
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
          console.log(err.response);
        });
      // console.log(payload);
    },

    getUserInfo: ({ dispatch, commit }) => {
      let token = localStorage.user_token;
      let config = {
        headers: {
          Authorization: "Bearer " + token
        }
      };
      axios
        .get("http://localhost:8000/api/profile", config)
        .then(res => {
          // console.log(res.data.user);
          dispatch("check_login", localStorage.user_token);
          dispatch("user_id", res.data.user.id);
          dispatch("user_info", res.data);
          dispatch("getUserType", res.data.user.id);
        })
        .catch(err => {
          console.log(err);
          alert("check your ID and Password");
        });
    },

    getUserType: ({ dispatch, commit, store }, payload) => {
      axios
        .get("http://localhost:8000/api/type?id=" + payload)
        .then(res => {
          dispatch("user_type", res.data);
        })
        .catch(err => {
          console.log(err);
        });
    },

    logout: ({ dispatch }) => {
      localStorage.removeItem("user_token");
      dispatch("check_login", false);
      dispatch("user_id", "");
      dispatch("user_type", "");
    }
  }
});
