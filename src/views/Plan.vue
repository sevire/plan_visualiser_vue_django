<template>
  <table>
    <thead>
      <tr>
        <td>Key</td>
        <th>Activity Name</th>
        <th>Start Date</th>
        <th>End Date</th>
        <th>Track #</th>
      </tr>
    </thead>
    <tbody>
      <Activity
        v-for="(activity, i) in this.plan_data"
        @update-item="updateItem"
        :activity="activity"
        :key="i"
      />
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Activity from "@/components/Activity.vue";

export default defineComponent({
  name: "Plan",
  components: { Activity },
  props: ["plan_data"],
  methods: {
    updateItem(itemName: string, activityKey: number, itemValue: never) {
      this.$emit("update-item-root", itemName, activityKey, itemValue);
    },
  },
});
</script>

<style scoped></style>
