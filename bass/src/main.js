import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import '@/assets/main.scss';

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App)
}).$mount("#app");
