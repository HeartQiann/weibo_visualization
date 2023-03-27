import Vue from 'vue'
import App from './App.vue'
//引入vuex仓库
import store from '@/store/index.js';
//引入路由
import router from '@/router';
//引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入echarts
import * as echarts from 'echarts';
//引入侧边栏 顶部栏
import SideBar from '@/components/SideBar';
import NavBar from '@/components/NavBar';
import ThemeSetting from '@/components/Theme';
import CategorySelect from '@/components/CategorySelect';
//注册侧边栏为全局组件
Vue.component(SideBar.name,SideBar);
Vue.component(NavBar.name,NavBar)
Vue.component(ThemeSetting.name,ThemeSetting);
Vue.component(CategorySelect.name,CategorySelect);
//引入api 挂载在vue原型对象上 组件实例的原型指向vue.prototypr
import API from '@/api';
Vue.prototype.$API = API;
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);   //使用elementUI
Vue.config.productionTip = false
// 允许vue调试
Vue.config.devtools = true

new Vue({
  render: h => h(App),
  //注册仓库
  store,
  //注册路由
  router,
}).$mount('#app')
