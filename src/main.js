import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TwicAbstract from "./components/demo-wrapper/TwicAbstract.vue";
import TwicCode from "./components/demo-wrapper/TwicCode.vue";
import TwicWrapper from "./components/demo-wrapper/TwicWrapper.vue";

Vue.config.productionTip = false;

import TwicPics from "@twicpics/components/vue2";
import "@twicpics/components/style.css";

Vue.use(TwicPics, {
  domain: `https://demo.twic.pics`,
  anticipation: 0.5,
  step: 100
});

Vue.component("Code", TwicCode);
Vue.component("TwicAbstract", TwicAbstract);
Vue.component("TwicWrapper", TwicWrapper);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
