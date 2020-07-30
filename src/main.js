import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  axios from './request/http' // 导入API接口
Vue.prototype.$api = axios // 将api挂载到vue的原型上
Vue.use(ElementUI);

Vue.config.productionTip = false
import './assets/common/style/resrt.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
