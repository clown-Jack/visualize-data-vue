<template>
  <div class="sn-container">
    <div class="sn-conntain ">
      <div class="sn-title">滚动弧形线</div>
      <div class="sn-body">
        <div class="chart" ref="chart"></div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  ref,
  getCurrentInstance,
  reactive,
  unref,
  toRefs,
  onMounted,
  onBeforeUnmount
} from "vue";
export default {
  name: "rollarc",
  setup() {
    const state = reactive({
      xData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      data: [54, 86, 46, 77, 96, 89, 88, 23, 38, 3, 66, 98],
      timer: null,
      index: 0
    });
    const chart = ref(null);
    let { ctx } = getCurrentInstance();
    let initChart = () => {
      let mychart = ctx.$echarts.init(unref(chart));
      let option = {
        tooltip: {
          trigger: "axis",
          showContent: false,
          axisPointer: {
            type: "shadow",
            shadowStyle: {
              color: new ctx.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 1,
                  color: "#5d83ff"
                },
                {
                  offset: 0,
                  color: "rgba(255, 255, 255, 0)"
                }
              ])
            }
          }
        },
        color: ["#5d83ff"],
        grid: {
          top: 30,
          left: 20,
          right: 20,
          bottom: 20,
          containLabel: true //轴上的数值
        },
        xAxis: {
          type: "category",
          data: state.xData,
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: "{value} 月"
          },
          axisLine: {
            lineStyle: {
              color: "#999"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "#999"
            }
          }
        },
        series: [
          {
            name: "人数",
            type: "line",
            data: state.data,
            symbolSize: 10,
            itemStyle: {
              opacity: 0
            },
            emphasis: {
              label: {
                show: true,
                color: "#fff",
                fontSize: 20,
                opacity: 1
              },
              itemStyle: {
                color: "#5d83ff",
                borderColor: "#fff",
                borderWidth: 2,
                opacity: 1
              }
            },
            areaStyle: {
              normal: {
                color: new ctx.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#5d83ff"
                  },
                  {
                    offset: 1,
                    color: "rgba(0, 0, 0, 0)"
                  }
                ])
              }
            },
            smooth: true
          }
        ]
      };
      mychart.setOption(option, true);

      window.addEventListener("resize", () => {
        mychart.resize();
      });

      state.timer = setInterval(() => {
        mychart.dispatchAction({
          type: "showTip",
          seriesIndex: 0,
          dataIndex: state.index
        });

        state.index++;

        if (state.index == state.data.length) {
          state.index = 0;
        }
      }, 1000);
    };

    onMounted(() => {
      initChart();
    });

    onBeforeUnmount(() => {
      clearInterval(state.timer);
    });
    return {
      chart,
      ...toRefs(state)
    };
  }
};
</script>
<style lang="stylus" scoped>
.sn-container
  left 50px
  top 690px
  width 895px
  height 400px
  .chart
    width 100%
    height 95%
</style>
