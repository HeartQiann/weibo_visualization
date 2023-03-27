//这个模块用于将所有API接口进行统一管理
import requests from "./request";
const reqUserLogin = (data) =>{
    return requests({
        url:'/api/users/login',
        method:'post',
        data,
    })
};
const reqUserRegister = (data) =>{
    return requests({
        url:'/api/users/register',
        method:'post',
        data,
    })
};
const reqHotList = (pageNum,pageSize)=>{
    return requests({
        // 注意获取列表数据的模板字符串形式
        url:`/api/hot/list?pageNum=${pageNum}&pageSize=${pageSize}`,
        method:'get',
    })
};
const reqTimeHotList = () =>{
    return requests({
        url:'/api/hotlist/all',
        method:'get',
    })
};
//获取话题一级分类属性值
const reqCategory1List = ()=>{
    return requests({
        url:'/api/getCategory/list1',
        method:'get',
    })
};
//获取话题二级分类属性值
const reqCategory2List = (father_id) =>{
    return requests({
        url:`/api/getCategory/list2?father_id=${father_id}`,
        method:'get',
    })
};
//获取某个话题的列表
const reqTopicOneList = (topic_id,pageNum,pageSize) =>{
    return requests({
        url:`/api/topic/one?topic_id=${topic_id}&pageNum=${pageNum}&pageSize=${pageSize}`,
        method:'get',
    })
};
//获取话题热度前十
const reqHotTopic = () =>{
    return requests({
        url:'/api/topic/hotlist',
        method:'get'
    })
};
//获取指定关键词的singlepass聚类结果
const reqSinglePassRes = (label) =>{
    return requests({
        url:`/api/singlepass/one?label=${label}`,
        method:'get'
    })
};
//获取指定关键词按时间统计的结果
const reqTimeCountData = (label) =>{
    return requests({
        url:`/api/singlepass/time?label=${label}`,
        method:'get'
    })
};
//获取指定关键词 top5用户信息
const reqTopUsersData = (label) =>{
    return requests({
        url:`/api/singlepass/topusers?label=${label}`,
        method:'get'
    })
};
//获取分季度活跃用户数据
const reqActiveUsers = () =>{
    return requests({
        url:'/api/activeuser/list',
        method:'get'
    })
};
//请求修改密码
const reqModifyPassword = (data)=>{
    return requests({
        url:'/api/users/',
        method:'patch',
        data,
    })
};
//获取用户列表
const reqUserList = () =>{
    return requests({
        url:'/api/users/authority',
        method:'get'
    })
};
//删除指定用户
const reqDeleteUser = (data) =>{
    return requests({
        url:"/api/users/deleteUser",
        method:"delete",
        data
    })
};
//修改用户权限
const reqUpdateUser = (data) =>{
    return requests({
        url:"/api/users/updateUser",
        method:'put',
        data,
    })
}
export default{
    reqUserLogin,
    reqUserRegister,
    reqHotList,
    reqTimeHotList,
    reqCategory1List,
    reqCategory2List,
    reqTopicOneList,
    reqHotTopic,
    reqSinglePassRes,
    reqTimeCountData,
    reqTopUsersData,
    reqActiveUsers,
    reqModifyPassword,
    reqUserList,
    reqDeleteUser,
    reqUpdateUser
}
