<template>
  <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center auth px-0">
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <!-- <img src="static/picture/logo.svg" alt="logo"> -->
                <h2 class="font-weight-bold">微博舆情可视化平台</h2>
              </div>
              <h4>首次登录</h4>
              <h6 class="font-weight-light">在这里注册，只需以下几步</h6>
              <form class="pt-3">
                <div class="form-group">
                  <input type="text" class="form-control form-control-lg" id="exampleInputUsername1" placeholder="请输入用户名">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="请输入密码">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="请输入确认密码">
                </div>
                <div class="form-group">
                  <select class="form-control form-control-lg" id="exampleFormControlSelect2">
                    <option>普通用户</option>
                    <option>管理员</option>
                  </select>
                </div>
                <!-- <div class="mb-4">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input">
                      I agree to all Terms & Conditions
                    </label>
                  </div>
                </div> -->
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="index.html">注册</a>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  已有账户？请 
                  <router-link to="/login" class="text-primary">登录</router-link>
                  <!-- <a href="login.html" class="text-primary">Login</a> -->
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
    name: 'Register',
}
</script>

<style scoped>
  @import '/public/static/css/typicons.css';
  @import '/public/static/css/vendor.bundle.base.css';
  @import '/public/static/css/style.css';
  /* 修改整个背景 */
  .content-wrapper{
    background: url(~@/assets/b1.jpg);
    background-size: 100% 100%;
  }
  /* 修改中间表单的背景颜色 */
  .auth-form-light{
    background: #e8e8db ;
  }
  /* 修改确认密码的背景颜色 */
  .auth form .form-group .form-control{
    background: #e8f0fe;
  }
</style>