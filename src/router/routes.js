// 路由的配置信息 
// 引入一级路由组件
import Login from '@/pages/login'
import Register from '@/pages/register'

//使用路由懒加载 在需要使用的时候再加载相应的组件
// const foo = ()=>{
//     // console.log("访问home首页");
//     return import("@/pages/Home");
// }

//对外暴露一个数组
export default [
    {
        path:"/login",
        component:Login,
        name:"login",
        mate:{show:false}
    },
    {
        path:"/register",
        component:Register,
        meta:{show:false}
    },
    // 重定向 在项目跑起来的时候 立即定向到首页
    {
        path:'*',
        redirect:"/login"
    }
]