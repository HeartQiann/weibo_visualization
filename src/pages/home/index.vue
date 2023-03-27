<template>
  <div>
    <div class="container-scroller">
      <!-- 顶部栏 -->
      <NavBar></NavBar>
      <div class="container-fluid page-body-wrapper">
        <!-- 右下角设置皮肤选项 -->
        <ThemeSetting></ThemeSetting>
        <!-- 侧边栏组件 -->
        <Sidebar></Sidebar>
        <!-- 右边部分内容！！！重要  这里设置为一个组件-->
        <!-- 路由的出口 显示对应的组件 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import "/public/static/js/vendor.bundle.base.js";
import "/public/static/js/hoverable-collapse.js";
import "/public/static/js/template.js";
import "/public/static/js/settings.js";
import "/public/static/js/off-canvas.js";
import "/public/static/js/todolist.js";
import "/public/static/js/progressbar.min.js";
import "/public/static/js/Chart.min.js";
import "/public/static/js/dashboard.js";
export default {
  name: "home",
  methods: {
  },
  components: {
  },
};
</script>

<style>
@import "/public/static/css/typicons.css";
@import "/public/static/css/vendor.bundle.base.css";
@import "/public/static/css/style.css";
</style>
