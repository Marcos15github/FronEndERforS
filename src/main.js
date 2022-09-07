import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'

Vue.use(VueAxios, axios)
Vue.config.productionTip = false
const app = express()
app.use(express.json())
app.get('/', function(req, res){
res.send('hhola mundo hp')
})
new Vue({
  vuetify,
  render: h => h(App)
  
}).$mount('#app');

const server = http.createServer(process.env.PORT || 3000);

app.listen(server, function() {
  console.log("servidor escuchando el puerto")
})