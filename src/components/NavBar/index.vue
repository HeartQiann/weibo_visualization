// 顶部栏
<template>
  <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <!-- 左上角标题部分 -->
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <!-- <h3 class="topTitle">微博舆情可视化平台</h3> -->
          <!-- 这里是标题 还没改 -->
          <a class="navbar-brand brand-logo" href=""><img src="static/picture/logo.svg" alt="logo"></a>
          <!-- <a class="navbar-brand brand-logo-mini" href=""><img src="static/picture/logo-mini.svg" alt="logo"></a> -->
          <!-- 控制左栏放大与缩小 -->
          <button class="navbar-toggler navbar-toggler align-self-center d-none d-lg-flex" type="button" data-toggle="minimize">
            <span class="typcn typcn-th-menu"></span>
          </button>
        </div>
        <!-- 顶部选项 -->
        <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <!-- 日历与首页 -->
          <ul class="navbar-nav mr-lg-2">
            <!-- 顶部 日历 -->
            <li class="nav-item  d-none d-lg-flex">
              <a class="nav-link" >
                日历
              </a>
              <!-- <el-calendar v-model="value" v-if="show"></el-calendar> -->
            </li>
            <!-- 顶部 首页 -->
            <li class="nav-item  d-none d-lg-flex">
              <a class="nav-link active" href="#">
                首页
              </a>
            </li>
          </ul>
          <!-- 顶部右上角 -->
          <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item d-none d-lg-flex  mr-2">
              <a class="nav-link" href="#">
                帮助
              </a>
            </li>
            <li class="nav-item dropdown d-flex">
              <a class="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                <i class="typcn typcn-message-typing"></i>
                <span class="count bg-success">2</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                <p class="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="static/picture/face4.jpg" alt="image" class="profile-pic">
                  </div>
                  <div class="preview-item-content flex-grow">
                    <h6 class="preview-subject ellipsis font-weight-normal">David Grey
                    </h6>
                    <p class="font-weight-light small-text mb-0">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="static/picture/face2.jpg" alt="image" class="profile-pic">
                  </div>
                  <div class="preview-item-content flex-grow">
                    <h6 class="preview-subject ellipsis font-weight-normal">Tim Cook
                    </h6>
                    <p class="font-weight-light small-text mb-0">
                      New product launch
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <img src="static/picture/face3.jpg" alt="image" class="profile-pic">
                  </div>
                  <div class="preview-item-content flex-grow">
                    <h6 class="preview-subject ellipsis font-weight-normal"> Johnson
                    </h6>
                    <p class="font-weight-light small-text mb-0">
                      Upcoming board meeting
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li class="nav-item dropdown  d-flex">
              <a class="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
                <i class="typcn typcn-bell mr-0"></i>
                <span class="count bg-danger">2</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-success">
                      <i class="typcn typcn-info-large mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">Application Error</h6>
                    <p class="font-weight-light small-text mb-0">
                      Just now
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-warning">
                      <i class="typcn typcn-cog mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">Settings</h6>
                    <p class="font-weight-light small-text mb-0">
                      Private message
                    </p>
                  </div>
                </a>
                <a class="dropdown-item preview-item">
                  <div class="preview-thumbnail">
                    <div class="preview-icon bg-info">
                      <i class="typcn typcn-user-outline mx-0"></i>
                    </div>
                  </div>
                  <div class="preview-item-content">
                    <h6 class="preview-subject font-weight-normal">New user registration</h6>
                    <p class="font-weight-light small-text mb-0">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li class="nav-item nav-profile dropdown">
              <a class="nav-link dropdown-toggle  pl-0 pr-0" href="#" data-toggle="dropdown" id="profileDropdown">
                <i class="typcn typcn-user-outline mr-0"></i>
                <!-- 这里放的是用户名 -->
                <span class="nav-profile-name">{{user_name}}</span>
              </a>
              <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <button class="dropdown-item">
                  <i class="typcn typcn-cog text-primary"></i>
                  设置
                </button>
                <button class="dropdown-item" @click="userLogOut">
                  <i class="typcn typcn-power text-primary"></i>
                  退出
                </button>
              </div>
            </li>
          </ul>
        </div>
  </nav>
</template>

<script>
export default {
    name:'NavBar',
    data(){
      return{
        value: new Date(),
        user_name:this.$store.state.user_name
        // show:false,
      }
    },
    methods:{
      //用户退出
      userLogOut(){
        // 清除本地token和用户名
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('USER_NAME');
        // 清除vuex的token和用户名
        this.$store.state.token = "";
        this.$store.state.user_name = "";
        this.$router.push('/login');
      },
    }
}
</script>

<style>
@import "/public/static/css/typicons.css";
@import "/public/static/css/vendor.bundle.base.css";
@import "/public/static/css/style.css";
.topTitle{
  margin: 10px;
  font-weight: bold;
  color: #1b1b29;
}

</style>