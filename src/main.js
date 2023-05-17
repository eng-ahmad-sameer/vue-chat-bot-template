import Vue from "vue";
import App from "./App.vue";
import TextareaAutosizeDirective from "./helpers/vue-text-auto-size-directive";
Vue.use(TextareaAutosizeDirective);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
