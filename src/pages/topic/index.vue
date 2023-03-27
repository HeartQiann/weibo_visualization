<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="row">
        <div class="category">
          <!-- 接收子组件传递过来的值 设置自定义事件和自定义事件的回调-->
          <CategorySelect @getTopicId="getTopicId"></CategorySelect>
        </div>
        <div class="secondPic">
          <!-- <div class="topicHot"></div> -->
          <div class="topicDetail">
            <el-card>
              <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column
                  prop="user_name"
                  label="用户名"
                  width="150"
                ></el-table-column>
                <el-table-column
                  prop="content"
                  label="微博内容"
                ></el-table-column>
                <el-table-column prop="good" label="点赞" width="60">
                </el-table-column>
                <el-table-column prop="comment" label="评论" width="60">
                </el-table-column>
                <el-table-column prop="link" label="链接跳转" width="200">
                  <!-- 使用插槽进行链接跳转 -->
                  <template slot-scope="scope">
                    <div>
                      <a :href="scope.row.link">{{ scope.row.link }}</a>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
              <!-- 一个分页器 -->
              <el-pagination
                background
                layout="prev, pager, next"
                :total="100"
                @current-change="handleCurrentChange"
              >
              </el-pagination>
            </el-card>
          </div>
        </div>
        <div class="thirdPic">
          <!-- 左边图 -->
          <div class="left" ref="radarChart"></div>
          <!-- 右边图 -->
          <div class="right" ref="roseChart"></div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="d-sm-flex justify-content-center justify-content-sm-between">
        <span class="text-center text-sm-left d-block d-sm-inline-block">
          联系我们 : 河南省开封市龙亭区河南大学
        </span>
      </div>
    </footer>
    <!-- partial -->
  </div>
</template>

<script>
export default {
  name: "topic",
  data() {
    return {
      topic_id: "",
      pageNum: "1",
      pageSize: "4",
      tableData: [],
      roseNum:[],   //玫瑰图数据
    };
  },
  mounted() {
    this.initRadarChart();
    this.initRoseChart();
    this.getRoseNum();
  },
  methods: {
    // 接收子组件的话题id
    getTopicId(topic_id) {
      this.topic_id = topic_id;
      this.getTopicOneList();
    },
    // 发请求 获取指定话题列表
    async getTopicOneList() {
      let result = await this.$API.reqTopicOneList(
        this.topic_id,
        this.pageNum,
        this.pageSize
      );
      if (result.code == 200) {
        this.tableData = result.data.list;
      }
      // console.log(result);
    },
    //页码发生改变时 重新发请求
    handleCurrentChange(cur) {
      this.pageNum = cur;
      this.getTopicOneList();
    },
    //获取玫瑰图数据
    async getRoseNum(){
      let result = await this.$API.reqHotTopic();
      if(result.code==200){
        this.roseNum = result.data.list;
      }
    },
    //雷达图
    initRadarChart() {
      const radarChart = this.$echarts.init(this.$refs.radarChart);
      const option = {
        title: {
          text: "话题分类分布",
          padding: [20, 0, 20, 20], //上 右 下 左
          textStyle: {
            color: "#1b1b29",
            fontSize: 20,
          },
        },
        // 设置图例
        legend: {
          data: ["昨日话题热榜", "今日话题热榜"],
          x: "left",
          y: "bottom",
          padding: [10, 50, 10, 20], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
        },
        radar: {
          indicator: [
            { name: "学习", max: 5 },
            { name: "健康", max: 5 },
            { name: "生活", max: 5 },
            { name: "文化", max: 5 },
            { name: "娱乐", max: 5 },
            { name: "就业", max: 5 },
            { name: "动物", max: 5 },
            { name: "出行", max: 5 },
          ],
          // 设置雷达图中间射线的颜色
          // axisLine: {
          //   lineStyle: {
          //     color: "#013A3F",
          //   },
          // },
        },
        series: [
          {
            name: "hotlist",
            type: "radar",
            itemStyle: {
              // 折线拐点标志的样式
              normal: {
                color: "#1b1b29",
              },
              emphasis: {
                // 高亮时的样式
                lineStyle: {
                  width: 4,
                },
                opacity: 1,
              },
            },
            data: [
              {
                value: [4, 4, 3, 2, 4, 2, 2, 3],
                name: "昨日话题热榜",
                // 设置线条颜色 #bbbbbf
                lineStyle: { color: "#B0C4DE" },
                // 设置拐点颜色
                itemStyle: { color: "#1b1b29" },
              },
              {
                value: [2, 4, 4, 3, 5, 3, 3, 1],
                name: "今日话题热榜",
                lineStyle: { color: "#f989af" },
                // 设置拐点颜色
                itemStyle: { color: "#f2125e" },
              },
            ],
          },
        ],
      };
      option && radarChart.setOption(option);
    },
    //玫瑰图
    initRoseChart() {
      const roseChart = this.$echarts.init(this.$refs.roseChart);
      const option = {
        // legend: {
        //   top: "bottom",
        // },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [18, 180],    //比例调小
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 8,
            },
            data: this.roseNum,
            // 设置每一块的颜色
            color: ["#B0C4DE", "#f989af", "#6a7685", "#cecef6", "#a5a5c5","#58626f","#c20e4b"]
          },
        ],
      };
      option && roseChart.setOption(option);
    },
  },
  watch:{
    roseNum:{
      handler(newValue,oldValue){
        this.$nextTick(()=>{
          this.initRoseChart();
        })
      }
    }
  }
};
</script>

<style>
.category {
  /* 添加BFC */
  overflow: hidden;
  width: 100%;
  height: 50px;
  /* background-color:bisque; */
  margin: 10px 20px 30px;
}
.secondPic {
  display: flex;
  /* height: 500px; */
  width: 100%;
  /* 添加BFC */
  overflow: hidden;
}
.topicHot {
  width: 300px;
  height: 500px;
  background-color: cornflowerblue;
  margin: 0px 20px 30px;
}
.topicDetail {
  flex: 1;
  /* height: 500px; */
  margin: 0px 20px 30px;
}
/* 第三排 图表 */
.thirdPic {
  display: flex;
  height: 420px;
  width: 100%;
  margin: 0px 20px 0px;
  /* background-color: beige; */
}
.thirdPic .left {
  width: 40%;
  height: 420px;
  margin-right: 10px;
  background-color: white;
}
.thirdPic .right {
  flex: 1;
  height: 420px;
  margin-left: 10px;
  background-color: white;
}
.el-pagination {
  /* 设置分页器居中显示 */
  text-align: center;
  margin-top: 13px;
}
/* 修改elementUI分页器默认样式 */
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #f2125e !important;
}
/* 未选中的选项鼠标hover样式 */
.el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #f2125e !important;
  background-color: #fff !important;
}
/* 选中选项鼠标放上去的背景色 */
.el-pagination.is-background .el-pager li:not(.disabled).active:hover {
  background-color: #f2125e !important;
  color: #fff !important;
}
</style>