<template>
  <h1>按钮</h1>
  <div>
    <p>按钮可以通过loading属性设置Loading状态，Loading时按钮禁止点击</p>
    <doge-button type="primary" @mouseenter="isLoading=true" :loading="isLoading">HOVER ME</doge-button>
  </div>
  <div>
    <h1>普通按钮</h1>
    <p>如下是按钮组件提供的最朴素的用法，可以通过一个组件，通过不同的属性做出如下效果。</p>
    <doge-button type="primary">Primary</doge-button>
    <doge-button type="normal">Normal</doge-button>
    <doge-button type="dashed">Dashed</doge-button>
    <doge-button type="warning">Warning</doge-button>
    <doge-button type="link">Link</doge-button>
    <doge-button type="primary" startIcon="search">ICON</doge-button>
    <doge-button type="primary" startIcon="search" round></doge-button>
    <doge-button type="warning" startIcon="download" round/>
    <doge-button type="primary" startIcon="back" endIcon="forward" round>ROUND WITH TEXT</doge-button>
    <doge-button type="primary" loading>Loading</doge-button>
    <doge-button type="warning" loading>Loading</doge-button>
    <doge-button type="normal" round loading />
  </div>
  <div>
    <h1>Toggle Button</h1>
    <p>Toggle Button在按钮的基础上添加了一个开关状态，并允许设置开关状态的不同文字，除了不允许设置圆形按钮外，一切按钮的功能它都具备。</p>
    <doge-button-group>
      <doge-toggle-button
                          :state="toggleState"
                          @click="toggleState=!toggleState">
      </doge-toggle-button>
      <doge-toggle-button type="warning" 
                          :state="moniterOpen"
                          @click="toggleMoniter"
                          trueText="关闭监控" falseText="开启监控"
                          :loading="moniterLoading">
    </doge-toggle-button>
    </doge-button-group>
  </div>
  <div>
    <h1>禁用状态</h1>
    <p>按钮可以被禁用</p>
    <doge-button type="primary" disabled>Primary</doge-button>
    <doge-button type="normal" disabled>Normal</doge-button>
    <doge-button type="dashed" disabled>Dashed</doge-button>
    <doge-button type="warning" disabled>Warning</doge-button>
    <doge-button type="link" disabled>Link</doge-button>
    <doge-button type="primary" startIcon="search" disabled>ICON</doge-button>
    <doge-button type="primary" startIcon="search" round disabled></doge-button>
    <doge-button
      type="primary"
      startIcon="back"
      endIcon="forward"
      round
      disabled>ROUND WITH TEXT</doge-button>
    <doge-button type="primary" loading disabled>Loading</doge-button>
    <doge-button type="warning" loading disabled>Loading</doge-button>
    <doge-button type="normal" round loading disabled />
  </div>

  <div>
    <h1>SMALL</h1>
    <doge-button type="primary" size="small">Primary</doge-button>
    <doge-button type="normal" size="small" startIcon="search" round />
  </div>
  <div>
    <h1>NORMAL</h1>
    <doge-button type="primary" size="normal">Primary</doge-button>
    <doge-button type="normal" size="normal" startIcon="search" round />
  </div>
  <div>
    <h1>LARGE</h1>
    <doge-button type="primary" size="large">Primary</doge-button>
    <doge-button type="normal" size="large" startIcon="search" round />
  </div>
  <div>
    <h1>Radio Button</h1>
    <p>RadioButton是单选按钮，但不是传统的Radio，可以通过DogeRadioButtonGroup对其进行组合，单独的RadioButton无意义</p>
    <doge-radio-button-group :selectedName="size"
                              @selected="(name,index) => size = name">
      <doge-radio-button name="small">Small</doge-radio-button>
      <doge-radio-button name="normal">Normal</doge-radio-button>
      <doge-radio-button name="large">Large</doge-radio-button>
    </doge-radio-button-group>
  </div>
  <div>
    <h1>BUTTON GROUP</h1>
    <p>可以将一批按钮组合，它们将拥有相同的高度，并且所有排在中间的按钮的圆角会自动取消（也可以通过removeMiddleRadius属性来取消这个行为）</p>
    <p>可以设置按钮组的方向和按钮间距</p>
    <doge-button-group id="button-group" :direction="direction" :buttonMargin="margin + 'px'" :removeMiddleRadius="removeRadius" :size="size">
      <doge-button type="primary" @click="removeRadius=!removeRadius" :size="size">圆角/取消圆角</doge-button>
      <doge-button type="normal" @click="marginIncrease(10)" :size="size">Margin++</doge-button>
      <doge-button type="dashed" @click="marginIncrease(-10)" :size="size">Margin--</doge-button>
      <doge-button type="warning" @click="setDirection" :size="size">调整方向</doge-button>
      <doge-button type="link">Link</doge-button>
      <doge-button type="primary" startIcon="search" :size="size">ICON</doge-button>
      <doge-button type="primary" loading :size="size">Loading</doge-button>
      <doge-button type="warning" loading :size="size">Loading</doge-button>
    </doge-button-group>
  </div>
  <div style="height: 1000px"></div>
</template>

<script>
import DogeButton from "../DogeButton.vue";
import DogeToggleButton from '../DogeToggleButton.vue';
import DogeButtonGroup from "../DogeButtonGroup.vue";
import DogeRadioButton from '../DogeRadioButton.vue';
import DogeRadioButtonGroup from "../DogeRadioButtonGroup.vue";

export default {
  name: "ButtonExample",
  data() {
    return {
      isLoading: false,
      removeRadius: true,
      margin: 0,
      direction: 'row',
      toggleState: false,
      moniterLoading: false,
      moniterOpen: false,
      size: 'normal'
    };
  },
  components: {
    DogeButton,
    DogeToggleButton,
    DogeButtonGroup,
    DogeRadioButton,
    DogeRadioButtonGroup
  },
  methods: {
    marginIncrease(dis) {
      this.margin += dis;
    },
    setDirection() {
      if(this.direction == 'row') this.direction = 'column';
      else this.direction = 'row';
    },
    toggleMoniter() {

      if(this.moniterOpen) {
        this.moniterOpen = false;
      } else {
        this.moniterLoading = true;
        setTimeout(()=>{
          this.moniterOpen = true;
          this.moniterLoading = false;
        }, 1000);
      }
      return false;
    }
  },
};
</script>

<style>

</style>