// 路由的配置信息 
// 引入一级路由组件
import Login from '@/pages/login'
import Register from '@/pages/register'
import Home from '@/pages/home';

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
    //home页
    {
        path:"/home",
        component:Home,
        meta:{show:false},
        // 设置重定向 当访问/home时 重定向到first页面
        redirect:'/home/first',
        //配置二级路由
        children:[
            {
                path:'first',
                name:'First',
                //路由懒加载
                component:()=> import('@/pages/first'),
                meta:{show:false},
            },
            {
                path:'topic',
                name:'Topic',
                //路由懒加载
                component:()=> import('@/pages/topic'),
                meta:{show:false},
            },
            {
                path:'user',
                name:'User',
                component:()=>import('@/pages/user'),
                meta:{show:false}
            },
            {
                path:'opinion',
                name:'Opinion',
                component:()=>import('@/pages/opinion'),
                meta:{show:false}
            },
            {
                path:'modification',
                name:'Modification',
                component:()=>import('@/pages/modification'),
                meta:{show:false},
            },
            {
                path:'authority',
                name:'Authority',
                component:()=>import('@/pages/authority'),
                meta:{show:false},
            }
        ]
    },
    // 重定向 在项目跑起来的时候 立即定向到登录
    {
        path:'*',
        redirect:"/login"
    }
]