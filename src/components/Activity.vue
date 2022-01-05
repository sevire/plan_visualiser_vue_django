<template>
  <tr>
    <td>{{ this.$.vnode.key }}</td>
    <td>
      <input
        type="text"
        @change="itemUpdated('name', this.name)"
        v-model="this.name"
      />
    </td>
    <td>
      <input
        type="date"
        @change="itemUpdated('start', this.start_date)"
        v-model="this.start_date"
      />
    </td>
    <td>
      <input
        type="date"
        @change="itemUpdated('end', this.end_date)"
        v-model="this.end_date"
      />
    </td>
    <td>
      <input
        type="number"
        @change="itemUpdated('track', this.trackNum)"
        v-model="this.trackNum"
      />
    </td>
    <td>
      <button
        @click="
          this.trackNum--;
          itemUpdated('track', this.trackNum);
        "
      >
        up
      </button>
    </td>
    <td>
      <button
        @click="
          this.trackNum++;
          itemUpdated('track', this.trackNum);
        "
      >
        down
      </button>
    </td>
  </tr>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Activity",
  props: ["activity"],
  data() {
    return {
      name: this.activity.name,
      start_date: this.activity.start_date,
      end_date: this.activity.end_date,
      trackNum: this.activity.trackNum,
    };
  },
  methods: {
    itemUpdated(itemName, itemValue) {
      // Bubble up to Plan component
      this.$emit("update-item", itemName, this.$.vnode.key, itemValue);
    },
  },
});
</script>

<style scoped></style>
