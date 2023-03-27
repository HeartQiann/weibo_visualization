// 这里是侧边栏组件
<template>
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
      <!-- 左边栏用户信息 -->
      <li class="nav-item">
        <div class="d-flex sidebar-profile">
          <!-- 左边栏 头像位置 -->
          <div class="sidebar-profile-image">
            <img src="static/picture/face29.jpg" alt="image" />
            <span class="sidebar-status-indicator"></span>
          </div>
          <!-- 左边栏 用户名 -->
          <div class="sidebar-profile-name">
            <p class="sidebar-name">Dear {{ user_name }}</p>
            <p class="sidebar-designation">欢迎回来！</p>
          </div>
        </div>
        <!-- 搜索框 目前用不到 -->
        <!-- <div class="nav-search">
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Type to search..." aria-label="search" aria-describedby="search">
                <div class="input-group-append">
                  <span class="input-group-text" id="search">
                    <i class="typcn typcn-zoom"></i>
                  </span>
                </div>
              </div>
            </div> -->
        <p class="sidebar-menu-title">下面是菜单~</p>
      </li>
      <!-- 首页 -->
      <li class="nav-item">
        <a class="nav-link" @click="goFirst" href="#">
          <i class="typcn typcn-device-desktop menu-icon"></i>
          <span class="menu-title"
            >基础内容统计
            <span class="badge badge-primary ml-3">New</span></span
          >
        </a>
      </li>
      <!-- 话题分类统计 -->
      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          @click="goTopic"
          href="#"
          aria-expanded="false"
          aria-controls="ui-basic"
        >
          <i class="typcn typcn-briefcase menu-icon"></i>
          <span class="menu-title">话题分类统计</span>
          <i class="typcn typcn-chevron-right menu-arrow"></i>
        </a>
      </li>
      <!-- 舆情走势分析 -->
      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          @click="goOpinion"
          href="#"
          aria-expanded="false"
          aria-controls="form-elements"
        >
          <i class="typcn typcn-film menu-icon"></i>
          <span class="menu-title">舆情走势分析</span>
          <i class="menu-arrow"></i>
        </a>
      </li>
      <!-- 微博用户分析 -->
      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          @click="goUser"
          href="#"
          aria-expanded="false"
          aria-controls="charts"
        >
          <i class="typcn typcn-chart-pie-outline menu-icon"></i>
          <span class="menu-title">微博用户分析</span>
          <i class="menu-arrow"></i>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          data-toggle="collapse"
          href="#error"
          aria-expanded="false"
          aria-controls="error"
        >
          <i class="typcn typcn-globe-outline menu-icon"></i>
          <span class="menu-title">用户信息管理</span>
          <i class="menu-arrow"></i>
        </a>
        <div class="collapse" id="error">
          <ul class="nav flex-column sub-menu">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="goModification"> 修改密码 </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="goAuthority"> 权限管理 </a>
            </li>
          </ul>
        </div>
      </li>
      <!-- 关于我们 -->
      <li class="nav-item">
        <a class="nav-link" href="documentation.html">
          <i class="typcn typcn-document-text menu-icon"></i>
          <span class="menu-title">关于我们</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      user_name: this.$store.state.user_name,
    };
  },
  methods: {
    goTopic() {
      // console.log('路由跳转...');
      this.$router.push({ name: "Topic" });
    },
    goFirst() {
      this.$router.push({ name: "First" });
    },
    goUser() {
      this.$router.push({ name: "User" });
    },
    goOpinion() {
      this.$router.push({ name: "Opinion" });
    },
    goModification() {
      this.$router.push({ name: "Modification" });
    },
    goAuthority(){
      this.$router.push({ name: "Authority" });
    }
  },
};
</script>

<style>
</style>