import Vue from "vue";
import App from "./App.vue";
import Config from "../src/config/Config";

new Config();
Vue.config.productionTip = false;

new App().$mount();
