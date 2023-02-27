// 配置路由的地方
import Vue from 'vue';
import VueRouter from 'vue-router';
//使用插件
Vue.use(VueRouter);
// 避免重复点击相同路由出现的报错
//添加以下代码
//先把VueRouter原型对象的push保存一份
const originPush = VueRouter.prototype.push
//重写push方法
VueRouter.prototype.push = function (location,resolve,reject) {
    //调用保存的push方法
    //但是保存的push方法是挂载在window的方法 所以要通过call修改this的指向
  if(resolve&&reject){
    originPush.call(this,location,resolve,reject);
  }else{
    originPush.call(this,location,()=>{},()=>{});
  }
}
import routes from './routes.js';
//配置路由
let router = new VueRouter({
    //配置路由
    routes:routes,
    //设置滚动行为
    scrollBehavior(to, from, savedPosition) {
        // 始终滚动到顶部
        return { 
            y : 0
        }
    },
});
//引入store
// import store from '@/store';

export default router;