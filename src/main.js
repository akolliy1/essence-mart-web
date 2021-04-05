import Vue from 'vue'
import '@babel/polyfill'
import App from './App.vue'
import router from './router'
import store from './store'
import VueConfirmDialog from 'vue-confirm-dialog'
import VueFriendlyIframe from 'vue-friendly-iframe';
// import XFrameBypass from "x-frame-bypass";
import './plugins';

Vue.use(VueFriendlyIframe);
Vue.use(VueConfirmDialog)
// Vue.use(XFrameBypass)
// Vue.component('x-frame-bypass', XFrameBypass.default)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
