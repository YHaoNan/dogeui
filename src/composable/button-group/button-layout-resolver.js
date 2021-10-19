import { getCurrentInstance, onMounted, watch, toRefs } from "vue";

function setNeighborEdgeRadius(button, index, last, direction, radius) {
  if (button.classList.contains("round")) {
    return;
  }
  if (index != 0) {
    if (direction === 'row') {
      button.style.borderTopLeftRadius = radius;
      button.style.borderBottomLeftRadius = radius;
    } else {
      button.style.borderTopLeftRadius = radius;
      button.style.borderTopRightRadius = radius;
    }
  }
  if (index < last) {
    if (direction === 'row') {
      button.style.borderTopRightRadius = radius;
      button.style.borderBottomRightRadius = radius;
    } else {
      button.style.borderBottomLeftRadius = radius;
      button.style.borderBottomRightRadius = radius;
    }
  }
}

function addMargin(button, index, last, buttonMargin, direction) {
  let marginStart = buttonMargin, marginEnd = buttonMargin;
  if(index == 0) marginStart = '0px';
  if(index == last)  marginEnd = '0px';
  if(direction === 'row') {
    button.style.marginLeft = marginStart;
    button.style.marginRight = marginEnd;
  } else {
    button.style.marginTop = marginStart;
    button.style.marginBotom = marginEnd;
  }
}

export default function useButtonLayoutResolver(props) {
  const {removeMiddleRadius, direction, buttonMargin} = toRefs(props);

  onMounted(() => {

    const buttons = getCurrentInstance().proxy.$el.children;

    function resetState() {
      Array.from(buttons).forEach((button, index) => {

        if(removeMiddleRadius.value) 
          setNeighborEdgeRadius(button, index, buttons.length - 1, direction.value, 0);
        else
          setNeighborEdgeRadius(button, index, buttons.length - 1, direction.value, '0.2em');

        addMargin(button, index, buttons.length - 1, buttonMargin.value, direction.value);

      });
    }

    watch(removeMiddleRadius, () => resetState());
    watch(buttonMargin, () => resetState());
    watch(direction, () => resetState());

    resetState();
  })
}