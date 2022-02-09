import Vue from "vue";
import App from "./App.vue";

import { ServerTable, ClientTable } from "vue-tables-2-premium";
Vue.use(ClientTable, {}, false, "bootstrap4");
Vue.use(ServerTable, {}, false, "bootstrap4");

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
