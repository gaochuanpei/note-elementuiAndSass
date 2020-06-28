import Vue from 'vue'
import router from './router/index'
import App from './App.vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import './css/el-css.css'
import './css/head.scss'
// Vue.config.productionTip = false

Vue.use(Element)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')