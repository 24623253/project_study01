<template>
  <div id="index">
    <div
      class="text"
      @mouseenter="mouseEnterLogin"
      @mouseleave="mouseLeave"
      @mouseover="mouseover"
      @mouseout="toggleShow"
    >我是登录后的起始页</div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    mouseover(e) {
      console.log(e);
    },
    mouseLeave(e) {
      console.log(e);
    },
    mouseEnterLogin(e) {
      console.log(e);
    },
    toggleShow(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="less" scoped>
.text {
//   background: red;
  width: 500px;
  height: 500px;
  z-index: 9;
  background: black;
}
#index  :hover.text{
    background: red;
    transform: scale(1.1);
    transition: 2s;
  }

</style>