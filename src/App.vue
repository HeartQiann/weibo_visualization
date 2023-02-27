<template>
  <div>
    <!-- 书写路由组件出口的地方 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './pages/login';
import Register from '@/pages/register';
// 注册
export default {
  // kv一致 省略v
  name: "",
  components: {
    Login,
    Register
  },
};
</script>

<style>
</style>