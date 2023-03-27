<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <!-- 第一排 展示用户特征 -->
      <div class="general">
        <el-row :gutter="20" type="flex" justify="center">
          <el-col :span="6">
            <el-card shadow="always" class="generalRowCard">
              <h2>月活跃用户</h2>
              <div class="activenum">
                <span>5.86亿</span>
                <svg t="1678595008331" class="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4671" width="32" height="32"><path d="M918.186667 194.332444a85.333333 85.333333 0 1 1 157.240889 66.446223c-165.546667 392.533333-285.809778 510.179556-629.191112 613.603555l-61.212444 17.635556-32.312889 8.760889a85.333333 85.333333 0 0 1-44.145778-164.864l30.72-8.419556 57.799111-16.497778 52.679112-16.384C676.522667 620.088889 764.586667 535.210667 878.933333 284.330667l25.941334-58.481778c4.323556-10.24 8.874667-20.707556 13.312-31.516445z" fill="#f2125e" p-id="4672"></path><path d="M974.734222 145.180444a85.333333 85.333333 0 0 1 100.807111 49.265778l3.754667 11.036445 103.082667 384.568889a85.333333 85.333333 0 0 1-161.109334 55.182222l-3.754666-10.922667-81.123556-302.307555-302.08 81.009777a85.333333 85.333333 0 0 1-100.807111-49.265777L529.749333 352.711111a85.333333 85.333333 0 0 1 49.379556-100.807111l11.036444-3.754667 384.568889-102.968889z" fill="#f2125e" p-id="4673"></path></svg>
              </div>             
            </el-card>
          </el-col>
          <el-col :span="6" type="flex" class="row-bg" justify="center">
            <el-card shadow="always" class="generalRowCard">
              <h2>日活跃用户</h2>
              <div class="activenum">
                <span>2.52亿</span>
                <svg t="1678595008331" class="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4671" width="32" height="32"><path d="M918.186667 194.332444a85.333333 85.333333 0 1 1 157.240889 66.446223c-165.546667 392.533333-285.809778 510.179556-629.191112 613.603555l-61.212444 17.635556-32.312889 8.760889a85.333333 85.333333 0 0 1-44.145778-164.864l30.72-8.419556 57.799111-16.497778 52.679112-16.384C676.522667 620.088889 764.586667 535.210667 878.933333 284.330667l25.941334-58.481778c4.323556-10.24 8.874667-20.707556 13.312-31.516445z" fill="#f2125e" p-id="4672"></path><path d="M974.734222 145.180444a85.333333 85.333333 0 0 1 100.807111 49.265778l3.754667 11.036445 103.082667 384.568889a85.333333 85.333333 0 0 1-161.109334 55.182222l-3.754666-10.922667-81.123556-302.307555-302.08 81.009777a85.333333 85.333333 0 0 1-100.807111-49.265777L529.749333 352.711111a85.333333 85.333333 0 0 1 49.379556-100.807111l11.036444-3.754667 384.568889-102.968889z" fill="#f2125e" p-id="4673"></path></svg>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="always" class="generalRowCard">
              <h2>男女比例</h2>
              <div class="activenum">
                <span>54/45</span>
                <svg t="1678595283014" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6745" width="32" height="32"><path d="M906.8 459.4L762.7 315.3c-26.9-26.9-70.4-26.9-97.2 0s-26.9 70.4 0 97.2l30.7 30.7H170.6c-19.1 0-36.3 7.8-48.8 20.3-1.6 1.3-3.2 2.4-4.7 3.8-26.9 26.9-26.9 70.4 0 97.2l144.1 144.1c13.4 13.4 31 20.1 48.6 20.1s35.2-6.7 48.6-20.1c26.9-26.9 26.9-70.4 0-97.2l-30.7-30.7h530.4c38 0 68.8-30.8 68.8-68.8 0-0.7-0.2-1.3-0.2-1.9 0.6-18.2-5.9-36.7-19.9-50.6z" fill="#f2125e" p-id="6746"></path></svg>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6" type="flex" class="row-bg" justify="center">
            <el-card shadow="always" class="generalRowCard">
              <h2>用户特征关键词</h2>
              <div class="activenum">
                <span>"始终年轻"</span>
                <svg t="1678595317694" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8228" width="32" height="32"><path d="M772.565 406.09c0-148.303-100.664-244.133-256.422-244.133S259.72 257.787 259.72 406.09c0 155.344 111.987 335.82 256.423 335.82s256.422-180.476 256.422-335.82zM516.143 705.318c-121.79 0-219.83-163.63-219.83-299.228 0-100.388 57.719-207.54 219.83-207.54s219.83 107.29 219.83 207.54c0 135.598-98.04 299.228-219.83 299.228z m341.343-227.839c-9.39 0-17.26 6.49-19.608 15.465-32.035 126.347-115.714 236.124-230.738 303.233l-19.332 11.185c-6.628 3.866-4.142 14.223 3.59 14.637l31.207-0.276v0.138l25.546-0.138s0.138 0 0.138-0.138l89.202-0.553c4.833 0.138 8.7-3.728 8.147-8.561l-17.536-51.091c47.086-45.43 86.993-100.25 115.576-162.663a523.157 523.157 0 0 0 33.416-96.107c3.176-12.842-6.49-25.131-19.608-25.131z" fill="#f2125e" p-id="8229"></path><path d="M444.615 807.5l-19.332-11.185C310.121 729.206 226.58 619.43 194.545 493.082c-2.348-9.113-10.219-15.465-19.608-15.465-13.118 0-22.784 12.29-19.608 24.993 8.147 33.693 19.47 65.728 33.416 96.107 28.722 62.414 68.628 117.233 115.577 162.663l-17.537 51.091c-0.552 4.833 3.452 8.837 8.147 8.561l89.202 0.553c0 0.138 0.138 0.138 0.138 0.138l25.546 0.138v-0.138l31.207 0.276c7.732-0.276 10.08-10.633 3.59-14.5z" fill="#f2125e" p-id="8230"></path></svg>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div class="userFirstRow">
        <div class="userFirstLeft" ref="userFirstLeft">
          <!-- 微博用户年龄分布 -->
        </div>
        <div class="userFirstRight" ref="SexChart">
          <!-- 微博用户性别比例 -->
        </div>
      </div>
      <div class="userSecondRow" ref="userSecondRow">
        <!-- 用户活跃情况分析 条形图 -->
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
  name: "user",
  data() {
    return {
      activeUser:{
        time:[],
        day:[],
        mounth:[],
      }
    };
  },
  mounted() {
    this.initFirstRightChart();
    this.initUserFirstLeft();
    this.getActiveUserData();
  },
  methods: {
    // 用户年龄分布比例
    initUserFirstLeft() {
      const userFirstLeft = this.$echarts.init(this.$refs.userFirstLeft);
      const option = {
        title: {
          text: "用户年龄分布",
          left: "center",
          top: 10,
        },
        //设置图表和标题的距离
        grid: {
          top: "30%",
          bottom: "10%",
        },
        //设置提示框 显示格式
        tooltip: {
          trigger: "item",
          formatter: "{b}:{d}%",
        },
        visualMap: {
          show: false,
          min: 0,
          max: 50,
          inRange: {
            colorLightness: [0.3, 0.6],
          },
        },
        series: [
          {
            name: "用户年龄分布",
            type: "pie",
            radius: "80%",
            // 圆心位置
            center: ["50%", "55%"],
            data: [
              // { value: 1, name: "60后&plus" },
              { value: 4, name: "70后&plus" },
              { value: 18, name: "80后" },
              { value: 48, name: "90后" },
              { value: 30, name: "00后" },
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: "radius",
            labelLine: {
              smooth: 0.2,
              length: 10,
              length2: 20,
            },
            // label:{
            //   normal:{
            //     // 模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。
            //     formatter:'{b}%'
            //   }
            // },
            itemStyle: {
              color: "#1b1b29",
              shadowBlur: 200,
              shadowBlur: "#F2F2F2",
              // shadowColor: "rgba(0, 0, 0, 0.5)",
            },
            animationType: "scale",
            animationEasing: "elasticOut",
            animationDelay: function (idx) {
              return Math.random() * 200;
            },
          },
        ],
      };
      option && userFirstLeft.setOption(option);
    },
    initFirstRightChart() {
      const SexChart = this.$echarts.init(this.$refs.SexChart);
      const option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["女用户", "男用户"],
          // y:'top',
          // 上、右、下、左
          padding: [20, 20, 20, 20, 20],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "value", //连续数据
            axisLable: {
              show: true,
              interval: "auto",
              formatter: "{value}%",
            },
          },
        ],
        yAxis: [
          {
            type: "category", //离散的类目数据
            axisTick: {
              show: false,
            },
            data: ["00后", "90后", "80后", "70后", "60后 & plus"],
          },
        ],
        series: [
          {
            name: "男用户",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
            },
            emphasis: {
              focus: "series",
            },
            data: ["38.4", "45.9", "52.3", "54.9", "58.9"],
            itemStyle: {
              color: "#8989B1",
            },
          },
          {
            name: "女用户",
            type: "bar",
            stack: "Total",
            label: {
              show: true,
              position: "left",
            },
            emphasis: {
              focus: "series",
            },
            data: ["-61.6", "-54.1", "-47.7", "-45.1", "-41.1"],
            itemStyle: {
              color: "#e4c3ce",
            },
          },
        ],
      };
      option && SexChart.setOption(option);
    },
    //用户活跃情况分布图
    initUserSecondRow() {
      const userSecondRow = this.$echarts.init(this.$refs.userSecondRow);
      const option = {
        title: {
          text: "微博活跃用户数统计",
          left:'center',
          top:'5%'
        },
        // 鼠标hover提示框
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        // 拖动图形大小
        dataZoom: [
          {
            type: "inside",
          },
          {
            type: "slider",
          },
        ],
        legend: {
          x:'right',
          y:'top'
        },
        grid: {
          top:'15%',
          left: "5%",
          right: "5%",
          bottom: "15%",
        },
        xAxis: {
          type: "category",
          data: this.activeUser.time,
        },
        yAxis: {
          type: "value",
          // boundaryGap: [0, 0.01]
        },
        series: [
          {
            name: "日活跃用户数",
            type: "bar",
            data:this.activeUser.day,
            // 设置柱子颜色
            itemStyle:{
              color:'#a3a3bb'
            }
          },
          {
            name: "月活跃用户数",
            type: "bar",
            data: this.activeUser.mounth,
            // 设置柱子颜色
            itemStyle:{
              color:'#e4c3ce'
            }
          },
        ],
      };
      option && userSecondRow.setOption(option);
    },
    //获取用户活跃情况数据
    async getActiveUserData(){
      let result = await this.$API.reqActiveUsers();
      // console.log(result);
      if(result.code==200){
        //存储数据
        for(let i in result.result.list){
          this.activeUser.time[i] = result.result.list[i].time;
          this.activeUser.day[i] = result.result.list[i].day;
          this.activeUser.mounth[i] = result.result.list[i].mounth;
        }
        this.initUserSecondRow();
      }
    }
  },
};
</script>

<style>
.general {
  width: 100%;
  /* height: 100px; */
  /* background-color:antiquewhite; */
  margin-bottom: 20px;
}
.generalRowCard h2 {
  text-align: center;
  color: #1b1b29;
  font-weight: bold;
}
.activenum{
  text-align: center;
}
.activenum span {
  /* span居中必须加block */
  /* display: block; */
  text-align: center;
  margin-top: 10px;
  color: #1b1b29;
  font-size: 18px;
}
.like {
  cursor: pointer;
  font-size: 25px;
  display: inline-block;
}
.userFirstRow {
  width: 100%;
  height: 350px;
  /* background-color: beige; */
  display: flex;
}
.userFirstLeft {
  width: 40%;
  height: 350px;
  background-color: white;
  margin-right: 15px;
}
.userFirstRight {
  flex: 1;
  height: 350px;
  background-color: white;
  margin-left: 15px;
}
.userSecondRow {
  width: 100%;
  height: 450px;
  background-color: white;
  margin-top: 30px;
}
</style>