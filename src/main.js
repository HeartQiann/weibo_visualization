import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router';
//引入css样式
// import '@/style/materialdesignicons.min.css';
// import '@/style/select2.min.css';
// import '@/style/select2-bootstrap.min.css';
// import '@/style/style.css';
// import '@/style/typicons.css';
// import '@/style/vendor.bundle.base.css';


Vue.config.productionTip = false
// 允许vue调试
Vue.config.devtools = true

new Vue({
  render: h => h(App),
  //注册路由
  router,
}).$mount('#app')
