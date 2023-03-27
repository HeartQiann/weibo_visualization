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
                  <input type="text" v-model="user_form.user_name"  class="form-control form-control-lg"  placeholder="请输入用户名">
                  <span class='tips' v-show="user_form.user_name==''">用户名不能为空</span>
                </div>
                <div class="form-group">
                  <input type="password" v-model="user_form.password" class="form-control form-control-lg"  placeholder="请输入密码">
                  <span class='tips' v-show="user_form.password==''">密码不能为空</span>
                </div>
                <div class="form-group">
                  <input type="password" v-model="user_form.password1" class="form-control form-control-lg"  placeholder="请输入确认密码">
                  <span class='tips' v-show="user_form.password1==''">确认密码不能为空</span>
                  <span class='tips' v-show="user_form.password1!=''&&user_form.password!=user_form.password1">两次输入密码不一致 请修改~</span>
                </div>
                <div class="form-group">
                  <select class="form-control form-control-lg" id="exampleFormControlSelect2" v-model="user_form.is_admin">
                    <option value = "0" >普通用户</option>
                    <option value = "1" >管理员</option>
                  </select>
                </div>
                <div class="mt-3">
                  <button @click="userRegister" class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">注册</button>
                </div>
                <div class="text-center mt-4 font-weight-light">
                  已有账户？请 
                  <router-link to="/login" class="text-primary">登录</router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '/public/static/js/vendor.bundle.base.js';
  import '/public/static/js/hoverable-collapse.js';
  import '/public/static/js/template.js';
  import '/public/static/js/settings.js';
  import '/public/static/js/off-canvas.js';
  import '/public/static/js/todolist.js';
export default {
    name: 'Register',
    data(){
      return{
        user_form:{
          user_name:'',
          password:'',
          password1:'',
          is_admin:'0',
        },
      }
    },
    methods:{
      //用户注册
      async userRegister(){
        const {user_name,password,is_admin} = this.user_form;
        try {
          let result = await this.$API.reqUserRegister({user_name,password,is_admin});
          // console.log(result);
          if(result.code==200){
            //注册成功
            this.$message({
              message: '注册成功！即将跳转登录页',
              type: 'success'
            });
            // 延时器 两秒后执行 这里要使用箭头函数 以免改变this的指向
            setTimeout(()=>{
              this.$router.push('/login');
            },1000);
          }else if(result.code==10002){
            this.$message({
              message: '用户名已存在！请前往登录',
              type: 'warning'
            });
          }
        } catch (error) {
          console.log(error);
        }
        
        
      }
    }
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
  /* 用户名输入有误时的提示 */
  .form-group .tips{
    /* 转为块级元素 */
    display: block;   
    color: #f2125e;
    margin-top:5px;
  }
</style>