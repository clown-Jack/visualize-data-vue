<template>
  <div class="sn-container">
    <div class="sn-conntain">
      <div class="sn-title">双轴柱状图</div>
      <div class="sn-body">
        <div class="chart" ref="chart"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, ref, getCurrentInstance, unref, onMounted } from "vue";
export default {
  name: "biaxialBar",
  setup() {
    const { ctx } = getCurrentInstance();
    const chart = ref(null);
    const state = reactive({
      xAxisData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      yData1: [9, 12, 15, 18, 15, 12, 9, 12, 15, 18, 15, 12],
      yData2: [-9, -12, -15, -18, -15, -12, -9, -12, -15, -18, -15, -12]
    });

    let initChart = () => {
      let myChart = ctx.$echarts.init(unref(chart));
      let barWidth = "10%";
      let dataCoord = [
        { coord: [0, 9] },
        { coord: [1, 12] },
        { coord: [2, 15] },
        { coord: [3, 18] },
        { coord: [4, 15] },
        { coord: [5, 12] },
        { coord: [6, 9] },
        { coord: [7, 12] },
        { coord: [8, 15] },
        { coord: [9, 18] },
        { coord: [10, 15] },
        { coord: [11, 12] }
      ];
      let dataCoord2 = [
        { coord: [0, -9] },
        { coord: [1, -12] },
        { coord: [2, -15] },
        { coord: [3, -18] },
        { coord: [4, -15] },
        { coord: [5, -12] },
        { coord: [6, -9] },
        { coord: [7, -12] },
        { coord: [8, -15] },
        { coord: [9, -18] },
        { coord: [10, -15] },
        { coord: [11, -12] }
      ];
      let option = {
        xAxis: {
          data: state.xAxisData,
          axisLabel: {
            color: "#999",
            formatter: "{value} 月"
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(40, 103, 168, 0.3)"
            }
          }
        },
        yAxis: {
          axisLabel: {
            color: "#999"
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: "rgba(40, 103, 168, 0.3)"
            }
          }
        },
        grid: {
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
          containLabel: true
        },
        series: [
          {
            name: "正值柱状图",
            type: "bar",
            stack: "one",
            itemStyle: {
              normal: {
                color: new ctx.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "rgba(0, 0, 0, 0)"
                  },
                  {
                    offset: 0.5,
                    color: "#466e71"
                  },
                  {
                    offset: 0,
                    color: "#eb9b44"
                  }
                ])
              }
            },
            barWidth: barWidth,
            markPoint: {
              symbol: "circle",
              itemStyle: {
                normal: {
                  color: "#eb9b44",
                  shadowColor: "#eb9b44",
                  shadowBlur: 20
                }
              },
              symbolSize: [10, 10], // 容器大小
              symbolOffset: [0, 0], // 位置偏移
              data: dataCoord
            },
            data: state.yData1
          },
          {
            name: "负值柱状图",
            type: "bar",
            stack: "one",
            itemStyle: {
              normal: {
                color: new ctx.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "rgba(0, 0, 0, 0)"
                  },
                  {
                    offset: 0.5,
                    color: "#774a75"
                  },
                  {
                    offset: 1,
                    color: "#b34d69"
                  }
                ])
              }
            },
            barWidth: barWidth,
            markPoint: {
              symbol: "circle",
              itemStyle: {
                normal: {
                  color: "#b34d69",
                  shadowColor: "#b34d69",
                  shadowBlur: 20
                }
              },
              symbolSize: [10, 10],
              symbolOffset: [0, 0],
              data: dataCoord2
            },
            data: state.yData2
          }
        ]
      };
      myChart.setOption(option, true);

      window.addEventListener("resize", () => {
        myChart.resize();
      });
    };
    onMounted(() => {
      initChart();
    });
    return {
      chart
    };
  }
};
</script>
<style lang="stylus" scoped>
.sn-container {
  left: 975px;
  top: 690px;
  width: 895px;
  height: 400px;
  .chart {
    width: 100%;
    height: 95%;
  }
}
</style>
