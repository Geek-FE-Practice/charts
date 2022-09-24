<script setup lang="ts">
import { onMounted, reactive } from "vue";

import Chart from "./components/Chart.vue";
import { ChartData } from "./types";

const state: {
  charts: ChartData[];
} = reactive({
  charts: [],
});

onMounted(() => {
  fetch("/data/funnelChart?date=2022-09-20")
    .then((response) => response.json())
    .then(({ data }) => {
      console.log("🚀 ~ file: App.vue ~ line 16 ~ .then ~ data", data);
      state.charts = data;
    });
});
</script>

<template>
  <div class="charts-container">
    <Chart v-for="item in state.charts" :data="item"></Chart>
  </div>
</template>

<style scoped>
.charts-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
}
</style>
