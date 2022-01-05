<template>
  <h1>Plan Visual</h1>
  <canvas id="plan-visual" width="800" height="600"></canvas>
</template>

<script lang="ts">
import { drawVisual } from "@/ts/plan_visual";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PlanVisual",
  props: ["plan_data"],
  methods: {
    callDrawVisual() {
      drawVisual(this.plan_data);
    },
  },
  mounted() {
    this.callDrawVisual();
  },
});

// window.onload = drawVisual
</script>
<style scoped></style>
