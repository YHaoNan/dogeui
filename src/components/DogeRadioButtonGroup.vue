<template>
  <doge-button-group buttonMargin="0" :removeMiddleRadius="true">
    <slot></slot>
  </doge-button-group>
</template>

<script>
  import DogeButtonGroup from './DogeButtonGroup.vue'
  import {onMounted, getCurrentInstance, computed} from 'vue'

  export default {
    name: 'doge-radio-button-group',
    props: {
      selectedName: String
    },
    provide() {
      return {
        selectedName: computed(()=>this.selectedName)
      }
    },
    components: {DogeButtonGroup},
    setup(_, {emit}) {
      onMounted(()=>{
        Array.from(getCurrentInstance().proxy.$el.children).forEach((ele, index)=>{
          if(!ele.classList.contains('doge-radio-button')) return;
          ele.onclick = function() {
            let name = ele.getAttribute('name');
            emit('selected', name, index);
          }
        })
      })
    }
  }
</script>

<style scoped>

</style>