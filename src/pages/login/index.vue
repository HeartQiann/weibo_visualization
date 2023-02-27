<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <!-- <img src="/static/picture/logo.svg" alt="logo"> -->
                <h2 class="font-weight-bold">微博舆情可视化平台</h2>
              </div>
              <h4>Hello ! 请登录</h4>
              <!-- <h6 class="font-weight-light">Sign in to continue.</h6> -->
              <form class="pt-3">
                <div class="form-group">
                  <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" placeholder="请输入用户名">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="请输入密码">
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="index.html">登录</a>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input">
                    </label>
                  </div>
                  <a href="#" class="auth-link text-black">忘记密码？点击这里</a>
                </div>
                <div class="mb-2">
                  <router-link to="/register">
                    <button type="button" class="btn btn-block btn-facebook auth-form-btn">
                      <i class="typcn typcn-social-facebook-circular mr-2"></i>注册
                    </button>
                  </router-link>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  没有账户？<a href="register.html" class="text-primary">创建</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<script>
export default {
    name:'Login'
}
</script>

<style scoped>
  @import '/public/static/css/typicons.css';
  @import '/public/static/css/vendor.bundle.base.css';
  @import '/public/static/css/style.css';
  .content-wrapper{
    background: url(~@/assets/b1.jpg);
    background-size: 100% 100%;
  }
  .auth-form-light{
    background: #e8e8db ;
  }
</style>