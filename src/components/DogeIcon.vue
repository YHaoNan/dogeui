<template>
  <i :class="{'iconfont': builtinIconUnicode}" v-html="builtinIconUnicode"></i>
</template>

<script>
  import '../css/icon.css'
  import useBuiltinIconResolver from '../composable/icon/builtin-icon-resolver.js';
  import {computed} from 'vue';
  export default {
    name: 'doge-icon',
    props: {
      icon: String,
    },
    setup(props) {
      const builtinIconUnicode = computed(()=>useBuiltinIconResolver(props.icon).builtinIconUnicode)

      return {
        builtinIconUnicode
      }
    }
  }
</script>

<style scoped>

</style>