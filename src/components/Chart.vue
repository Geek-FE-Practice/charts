<script setup lang="ts">
import * as echarts from "echarts";
import { ref, onMounted } from "vue";

import type { ChartData } from "../types";

const props = defineProps<{
  data: ChartData;
}>();

const chartRef = ref();

onMounted(() => {
  if (!chartRef.value) {
    return;
  }

  console.log(
    "props.data.funnelChart[3].count",
    props.data.funnelChart[3].count
  );

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(chartRef.value);
  // 绘制图表
  myChart.setOption({
    title: {
      text:
        Reflect.ownKeys(props.data.spm)
          .map((key) => props.data.spm[key as keyof ChartData["spm"]])
          .join(".") + "点击转化数据",
    },
    toolbox: {
      feature: {
        dataView: { readOnly: false },
        restore: {},
        saveAsImage: {},
      },
    },

    series: [
      {
        name: "Funnel",
        type: "funnel",
        left: "10%",
        top: 60,
        bottom: 60,
        width: "80%",
        min: 0,
        max: props.data.funnelChart[3].count,
        minSize: "0%",
        maxSize: "100%",
        sort: "descending",
        gap: 2,
        label: {
          show: true,
          position: "inside",
        },
        labelLine: {
          length: 10,
          lineStyle: {
            width: 1,
            type: "solid",
          },
        },
        itemStyle: {
          borderColor: "#fff",
          borderWidth: 1,
        },
        emphasis: {
          label: {
            fontSize: 20,
          },
        },
        data: props.data.funnelChart
          .map((element) => ({
            value: element.count,
            name: `${element.label}：${element.count}`,
          }))
          .reverse(),
      },
    ],
  });
});
</script>

<template>
  <div ref="chartRef" class="chart"></div>
</template>

<style scoped>
.chart {
  width: 500px;
  height: 500px;
}
</style>
