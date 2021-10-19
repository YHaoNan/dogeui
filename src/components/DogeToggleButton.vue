<template>
  <doge-button
    :class="['doge-toggle-button', 'toggle-' + (state ? 'on' : 'off')]"
    :buttonColor="buttonColor"
    :textColor="textColor"
    :type="type"
    :size="size"
    :disabled="disabled"
    :startIcon="startIcon"
    :endIcon="endIcon"
    :loading="loading"
  >
    {{ state ? trueText : falseText }}
  </doge-button>
</template>

<script>
import DogeButton from "./DogeButton.vue";
import "../css/toggle-button.css";

export default {
  name: "doge-toggle-button",
  components: { DogeButton },
  props: {
    // Toggle Button的状态，true代表真状态，False代表假状态
    state: {
      type: Boolean,
      default: false,
    },
    trueText: {
      type: String,
      default: "ON",
    },
    falseText: {
      type: String,
      default: "OFF",
    },
    buttonColor: {
      type: String,
      default: "#3185FF",
    },
    textColor: {
      type: String,
      default: "#ffffff",
    },
    type: {
      validator(value) {
        return [
          "normal",
          "primary",
          "warning",
          "plain",
          "dashed",
          "link",
        ].includes(value);
      },
      default: "primary",
    },
    size: {
      validator(value) {
        return ["small", "normal", "large"].includes(value);
      },
      default: "normal",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    startIcon: {
      type: String,
    },
    endIcon: {
      type: String,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
</style>