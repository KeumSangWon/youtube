import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";
import "@babel/polyfill";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import axios from "axios";

Vue.config.productionTip = false;

const base = axios.create({
  baseURL: "http://localhost:8000"
});

Vue.prototype.$http = base;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch("getUserInfo");
    this.$store.dispatch("getUserType");
  },
  vuetify,
  render: h => h(App)
}).$mount("#app");
