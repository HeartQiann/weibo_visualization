// vuex管理部分
//首先写vuex的配置
import Vue from 'vue';
import Vuex from 'vuex';
import {getToken,getUserName} from '@/utils';
//需要使用插件一次
Vue.use(Vuex);
const state = {
    token:getToken(),
    user_name:getUserName(),
};
const mutations = {};
const actions = {};
const getters = {};

//然后对外暴露 里面写的是一个配置对象
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});

