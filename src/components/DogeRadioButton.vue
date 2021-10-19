<template>
  <doge-button :name="name" 
              :class="['doge-radio-button', selectedName == name ? 'doge-radio-selected' : '']"
              type="normal">
    <slot></slot>
  </doge-button>
</template>

<script>
  import DogeButton from './DogeButton.vue';
  import {inject} from 'vue';
  export default {
    name: 'doge-radio-button',
    components: {
      DogeButton
    },
    props: {
      name: {
        type: String
      }
    },
    setup() {
      return {
        selectedName: inject('selectedName')
      }
    }
  }
</script>

<style scoped>
.doge-radio-selected {
  border: #3185FF 1px solid;
  color: #3185FF;
  box-shadow: 0px 0px 2px 1px rgba(49,133,255,0.2);
}
.doge-radio-button:hover {
  color: #3185FF;
}
</style>