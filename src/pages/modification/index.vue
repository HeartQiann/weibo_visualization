<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="modification">
        <div class="modiTitle">
          <h3>修改密码</h3>
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="原密码" prop="oldpass">
            <el-input
              type="password"
              v-model="ruleForm.oldpass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item class="modi_item">
            <el-button type="primary" @click="submitForm()">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <footer class="footer">
      <div class="d-sm-flex justify-content-center justify-content-sm-between">
        <span class="text-center text-sm-left d-block d-sm-inline-block">
          联系我们 : 河南省开封市龙亭区河南大学
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Modification",
  data() {
    var validateOldPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入原始密码"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        oldpass: "",
        pass: "",
        checkPass: "",
      },
      rules: {
        oldpass: [{ validator: validateOldPass, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
    };
  },
  methods: {
    //修改密码
    async submitForm() {
      const authorization = this.$store.state.token;
      // console.log(authorization);
      const password = this.ruleForm.checkPass;
      // console.log(password);
      let result = await this.$API.reqModifyPassword({
        authorization,
        password,
      });
      console.log(result);
      if (result.code == 200) {
        this.$message({
          message: "修改密码成功",
          type: "success",
        });
        // 跳转到登录页面
        this.$router.push({ name: "login" });
      } else {
        this.$message.error("修改密码失败，请联系管理员");
      }
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style>
.modification {
  background-color: white;
  width: 500px;
  padding-right: 50px;
  margin-left: 300px;
  margin-top: 70px;
  height: 500px;
}
.modiTitle {
  padding-top: 50px;
  padding-bottom: 30px;
  /* height:100px; */
  width: 100%;
  /* background-color: lavender; */
}
.modiTitle h3 {
  font-weight: bold;
  text-align: center;
  margin-left: 60px;
   /* color: #f2125e */
}
.modi_item {
  /* background-color: bisque; */
  text-align: center;
  margin-top: 50px;
}
/* 修改button按钮颜色 */
.el-button--primary {
  background-color: white !important;
  border-width: 2px !important;
  border-color: #f2125e !important;
  color: #f2125e !important;
  font-weight: bold;
}
.el-button:active {
  background: #f2125e !important;
  font-weight: bold;
}
/*按钮悬浮*/
.el-button:hover {
  background: #f2125e !important;
  color: white !important;
  font-weight: bold;
  border-color: #f2125e !important;
}
/*按钮点击*/
.el-button:focus {
  background: #f2125e !important;
  color: white !important;
  font-weight: bold;
  border-color: #f2125e !important;
}
</style>