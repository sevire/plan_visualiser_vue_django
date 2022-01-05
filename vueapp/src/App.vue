<template>
  <div class="plan flex-item">
    <Plan @update-item-root="updateItemRoot" :plan_data="plan_data" />
  </div>
  <div class="visual flex-item">
    <PlanVisual ref="visual" :plan_data="plan_data" />
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import json_plan_data from "@/assets/plan_data.json";
import PlanVisual from "@/components/PlanVisual.vue";
import Plan from "@/views/Plan.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      plan_data: json_plan_data,
    };
  },
  components: {
    Plan,
    PlanVisual,
  },
  methods: {
    updateItemRoot(itemName: string, activityIndex: number, itemValue: never) {
      console.log("updateItemRoot", itemName, activityIndex, itemValue);
      if (itemName === "name") {
        this.plan_data[activityIndex].name = itemValue;
      } else if (itemName === "start") {
        this.plan_data[activityIndex].start_date = itemValue;
      } else if (itemName === "end") {
        this.plan_data[activityIndex].end_date = itemValue;
      } else if (itemName === "track") {
        this.plan_data[activityIndex].trackNum = itemValue;
      } else {
        console.log("Unrecognised item name " + itemName);
      }
      (this.$refs.visual as typeof PlanVisual).callDrawVisual();
    },
  },
  beforeMount() {
    // Add additional data to the end of each activity to facilitate control of the visual.
    // Includes track number.

    console.log("App:mounted (before)", this.plan_data);
    this.plan_data.forEach((activity, index) => {
      console.log(
        "Initialising track num for " +
          activity.name +
          " trackNum type " +
          typeof activity.name
      );
      activity.trackNum = index + 3;
    });
    console.log("App:mounted (after)", this.plan_data);
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex;
}
.fixed {
  width: 400px;
}
.flex-item {
  flex-grow: 1;
}
.plan {
  background-color: #85a7a8;
}
.visual {
  background-color: cadetblue;
}
</style>
