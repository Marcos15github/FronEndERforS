import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
new Vue({
  vuetify,
  render: h => h(App)
  
}).$mount('#app');

let port = process.env.PORT || 3030;
