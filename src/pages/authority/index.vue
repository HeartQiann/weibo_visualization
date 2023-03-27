<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <el-card>
        <el-table :data="userList" stripe style="width: 100%">
          <el-table-column prop="id" label="用户id" width="180">
          </el-table-column>
          <el-table-column prop="user_name" label="用户名" width="180">
          </el-table-column>
          <el-table-column
            prop="password"
            label="密码（已加密）"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="prop" label="是否为管理员" width="150" align="center" >
            <!-- 使用作用域插槽 -->
            <template slot-scope="{ row, $index }">
              <!-- 查看与编辑的切换 通过v-if v-else控制 -->
              <!-- @keyup.native.enter="tospan(row)" -->
              <!-- v-if="row.input" -->
              <el-input
                :ref="$index"
                v-model="row.is_admin"
                placeholder="请输入是否为管理员"
                v-if="row.input" 
                @blur="tospan(row)"
                @keyup.native.enter="tospan(row)"
              ></el-input>
              <span
                @click="toinput(row, $index)"
                style="display: block"
                v-else
                >{{ row.is_admin }}</span
              >
            </template>
          </el-table-column>
          <el-table-column
            prop="prop"
            label="操作"
            width="width"
            align="center"
          >
            <template slot-scope="{ row, $index }">
              <!-- @click="updateAttr(row)" @click="deleteAttr(row) -->
              <!-- <el-button type="primary" icon="el-icon-edit" circle plain ></el-button> -->
              <el-button
                type="danger"
                icon="el-icon-delete"
                @click="deleteAttr(row)"
                circle
                plain
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
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
  name: "Authority",
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    this.getUserList();
  },
  methods: {
    async getUserList() {
      let result = await this.$API.reqUserList();
      // console.log(result);
      if (result.code == 200) {
        for (let i in result.result.list) {
          if (!result.result.list[i].is_admin) {
            //不是管理员
            result.result.list[i].is_admin = '0';
          } else {
            result.result.list[i].is_admin = '1';
          }
        }
        this.userList = result.result.list;
        //将相应属性值元素添加input标签 实现输入框与span的切换
        this.userList.forEach(item=>{
          // 不能这么写 因为input不是响应式属性 --> 使用$set
          // item.input = false;
          this.$set(item,'input',false);
        })
      }
    },
    // 删除用户
    deleteAttr(row) {
      this.$confirm(
        `此操作将永久删除“${row.user_name}”用户, 是否继续?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(async () => {
          //发请求 删除指定属性
          let result = await this.$API.reqDeleteUser(row.id);
          this.$message({
            showClose: true,
            message: "删除用户成功！",
            type: "success",
          });
          //刷新当前页面的数据
          this.getUserList();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消删除",
          });
        });
    },
    //切换为span
    async tospan(row) {
      //检查用户输入是否为空
      if (row.is_admin.trim() == "") {
        this.$message({
          message: "该属性值不能为空",
          type: "warning",
        });
        row.is_admin = "";
        return;
      }else {
        row.input = false;
        //发请求
        const {id,user_name,password,is_admin} = row;
        let result = await this.$API.reqUpdateUser({id,user_name,password,is_admin});
        // console.log(result);
        if(result.code==200){
          //修改权限成功
          this.$message({
            showClose: true,
            message: "修改用户权限成功！",
            type: "success",
          });
        }
      }
    },
    //切换为input
    toinput(row, index) {
      row.input = true;
      //点击span 切换为input 但是浏览器页面重绘是耗时的 不会一点击span马上获取到input
      //使用nextTick
      this.$nextTick(() => {
        //获取相应input表单元素实现聚焦
        // console.log(this.$refs[index]);
        this.$refs[index].focus();
      });
    },
  },
};
</script>

<style>
</style>