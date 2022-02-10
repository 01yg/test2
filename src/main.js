import Vue from "vue";
import App from "./App.vue";

import { ServerTable, ClientTable } from "vue-tables-2-premium";

import IochordRow from "./components/gridCustom/IochordRow";
import IochordRowToggler from "./components/gridCustom/IochordRowToggler";
import IochordFilter from "./components/gridCustom/IochordFilter";
import IochordPagination from "./components/gridCustom/IochordPagination";
import IochordRecords from "./components/gridCustom/IochordRecords";

Vue.use(ClientTable, {}, false, "bootstrap4", {
  tableRow: IochordRow,
  childRowToggler: IochordRowToggler,
  genericFilter: IochordFilter,
  pagination: IochordPagination,
  perPageSelector: IochordRecords
});
Vue.use(ServerTable, {}, false, "bootstrap4");

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount("#app");
