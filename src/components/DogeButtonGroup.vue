<template>
  <div
    class="doge-button-group"
    :style="{ flexDirection: direction }"
  >
    <slot></slot>
  </div>
</template>

<script>
import useButtonLayoutResolver from '../composable/button-group/button-layout-resolver.js';

export default {
  name: "doge-button-group",
  props: {
    removeMiddleRadius: {
      type: Boolean,
      default: true,
    },
    direction: {
      validator(value) {
        return ["row", "column"].includes(value);
      },
      default: "row",
    },
    buttonMargin: {
      type: String,
      default: '0px',
    },
  },
  setup(props) {
    useButtonLayoutResolver(props);
  },
};
</script>

<style scoped>
.doge-button-group {
  display: flex;
  flex-wrap: wrap;
}
</style>