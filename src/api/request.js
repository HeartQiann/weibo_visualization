//对axois的二次封装
import axios from 'axios';

//利用axios对象的create方法下创建一个axios实例
const requests = axios.create({
    //配置对象
    //基础路径：在请求路径上自动带上/api
    // baseURL:"/api",
    //代表请求超时时间5s
    timeout:5000,
});

//请求拦截器
//在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情 interceptors就是拦截器
requests.interceptors.request.use((config)=>{
    // 携带token给服务器
    return config;
});
//响应拦截器
requests.interceptors.response.use((res)=>{
    return res.data;
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
})

//对外暴露
//这里对外暴露的不是axios 而是二次封装之后的requests
export default requests;