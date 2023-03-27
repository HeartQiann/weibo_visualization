<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <div class="selectOpinion">
        <el-select v-model="optionId" placeholder="请选择">
          <el-option
            v-for="(option, index) in options"
            :key="index"
            :label="option.label"
            :value="option.id"
          >
          </el-option>
        </el-select>
      </div>
      <div class="opinionFirst">
        <div class="polyLine" ref="polyLine"></div>
        <div class="popular" ref="popularBar"></div>
      </div>
      <div class="opinionSecond">
        <el-card>
          <!-- table设置表头居中 :header-cell-style="{'text-align':'center'}" -->
          <el-table :data="tableData" stripe>
            <el-table-column
              prop="content"
              label="精选微博内容"
            ></el-table-column>
            <el-table-column
              prop="user_name"
              label="用户名"
              width="80"
            ></el-table-column>
            <el-table-column prop="time" label="发布时间" width="100">
            </el-table-column>
            <el-table-column
              prop="good"
              label="点赞数"
              width="80"
            ></el-table-column>
            <el-table-column
              prop="comment"
              label="评论数"
              width="80"
            ></el-table-column>
            <el-table-column prop="to_other" label="转发数" width="80">
            </el-table-column>
            <el-table-column prop="url" label="url地址">
              <!-- 使用插槽进行链接跳转 -->
              <template slot-scope="scope">
                <div>
                  <a :href="scope.row.url">{{ scope.row.url }}</a>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
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
  name: "Opinion",
  data() {
    return {
      options: [
        {
          id: "1",
          label: "丫丫回国",
        },
        {
          id: "2",
          label: "全国人大",
        },
        {
          id: "3",
          label: "国家线",
        },
        {
          id: "4",
          label: "河南",
        },
        {
          id: "5",
          label: "甲流",
        },
      ],
      tableData: [], //存储后端返回的表格数据
      optionId: "1",
      polyData: {
        xAxis: [],
        yAxis: [],
      },
      top5UserData: {
        user_name: [],
        good: [],
        comment: [],
        to_other: [],
        goodmax:'',
        commentmax:'',
      },
    };
  },
  mounted() {
    this.getSinglePassData(this.optionId);
    this.getTimeCountData(this.optionId);
    this.getTopUsersData(this.optionId);
    this.initPopularBar();
  },
  methods: {
    //获取聚类数据
    async getSinglePassData(optionId) {
      let result = await this.$API.reqSinglePassRes(optionId);
      // console.log(result);
      if (result.code == 200) {
        this.tableData = result.data.list;
      }
    },
    //获取分时间段数据
    async getTimeCountData(optionId) {
      let result = await this.$API.reqTimeCountData(optionId);
      if (result.code == 200) {
        // 处理一下数据
        for (let i in result.data.list) {
          this.polyData.xAxis[i] = result.data.list[i].hour;
          this.polyData.yAxis[i] = result.data.list[i].count;
        }
        this.initPolyLine();
      }
    },
    //获取每个话题top5用户信息
    async getTopUsersData(optionId) {
      let result = await this.$API.reqTopUsersData(optionId);
      // console.log(result);
      if (result.code == 200) {
        // 处理top5用户信息
        for (let i in result.data.list) {
          this.top5UserData.user_name[i] = result.data.list[i].user_name;
          this.top5UserData.good[i] = result.data.list[i].good;
          this.top5UserData.comment[i] = result.data.list[i].comment;
          this.top5UserData.to_other[i] = result.data.list[i].to_other;
        }
        this.top5UserData.goodmax = Math.max(...this.top5UserData.good);
        this.top5UserData.commentmax = Math.max(...this.top5UserData.comment);
        this.initPopularBar();
      }
    },
    //画发博量随时间分布的折线图
    initPolyLine() {
      const polyLine = this.$echarts.init(this.$refs.polyLine);
      const option = {
        title: {
          text: "发博量随时间分布图",
          left: "center",
          padding: [20, 10, 10, 10],
        },
        // 调整图表和标题的距离
        grid: {
          top: "20%",
          bottom: "10%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
          },
        },
        xAxis: {
          type: "category",
          // 设置数据显示格式
          axisLabel: {
            formatter: "{value} : 00 ",
          },
          boundaryGap: false,
          data: this.polyData.xAxis,
        },
        yAxis: {
          type: "value",
          axisPointer: {
            snap: true,
          },
        },
        visualMap: {
          show: false,
          dimension: 1,
          pieces: [
            {
              // lte是小于等于 gt是大于  表示边界
              lte: 8,
              color: "#39393f",
            },
            {
              gt: 8,
              lte: 13,
              color: "#6d7aa0",
            },
            {
              gt: 13,
              color: "#f5417e",
            },
          ],
        },
        series: [
          {
            name: "热门微博量",
            type: "line",
            smooth: true,
            data: this.polyData.yAxis,
            markArea: {
              // 高峰期背景颜色
              itemStyle: {
                color: "#fdd9e5",
              },
              data: [
                [
                  {
                    name: "Morning Peak",
                    xAxis: "7",
                  },
                  {
                    xAxis: "10",
                  },
                ],
                [
                  {
                    name: "Evening Peak",
                    xAxis: "18",
                  },
                  {
                    xAxis: "21",
                  },
                ],
              ],
            },
          },
        ],
      };
      option && polyLine.setOption(option);
    },
    //博主 粉丝数 点赞数 转发量 评论数统计图
    initPopularBar() {
      const popularBar = this.$echarts.init(this.$refs.popularBar);
      const option = {
        title: {
          text: "话题影响力top5用户",
          left: "center",
          padding: [20, 10, 10, 10],
        },
        // 鼠标hover时提示框
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999",
            },
          },
        },
        legend: {
          x:'center',
          y:'bottom',
          data: ["转发数", "评论数", "点赞数"],
        },
        // 设置图表和标题的距离
        grid: {
          top: "20%",
          bottom: "15%",
        },
        xAxis: [
          {
            type: "category",
            data: this.top5UserData.user_name,
            axisPointer: {
              type: "shadow",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "评论数",
            min: 0,
            max: this.top5UserData.commentmax,
            interval: Math.floor(this.top5UserData.commentmax/3),
          },
          {
            type: "value",
            name: "点赞数",
            min: 0,
            max: this.top5UserData.goodmax,
            interval: Math.floor(this.top5UserData.goodmax/3),
          },
        ],
        series: [
          {
            name: "转发数",
            type: "bar",
            data: this.top5UserData.to_other,
            itemStyle:{
              color:'#6d7aa0'
            }
          },
          {
            name: "评论数",
            type: "bar",
            data: this.top5UserData.comment,
            itemStyle:{
              color:'#e4c3ce'
            }
          },
          {
            name: "点赞数",
            type: "line",
            yAxisIndex: 1,
            data: this.top5UserData.good,
            itemStyle:{
              color:'#f5417e'
            }
          },
        ],
      };
      option && popularBar.setOption(option);
    },
  },
  watch: {
    optionId(newValue, oldValue) {
      this.getSinglePassData(this.optionId);
      this.getTimeCountData(this.optionId);
      this.getTopUsersData(this.optionId);
    },
  },
};
</script>

<style>
.selectOpinion {
  width: 100%;
  /* height: 100px; */
  /* background-color: cornflowerblue; */
  margin-bottom: 20px;
  display: flex;
}
.opinionFirst {
  width: 100%;
  height: 400px;
  /* background-color: blanchedalmond; */
  /* margin-bottom: 20px; */
  display: flex;
}
.polyLine {
  width: 45%;
  /* width: 100%; */
  height: 400px;
  background-color: white;
  margin-right: 10px;
}
.popular {
  flex: 1;
  background-color: white;
  margin-left: 10px;
}
.opinionSecond {
  width: 100%;
  /* height: 380px; */
  background-color: white;
  margin-top: 20px;
}
</style>