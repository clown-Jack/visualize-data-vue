<template>
  <div class="home-page">
    <div class="home-wrap" ref="homeWrap">
      <div class="home-top"></div>
      <sinan/>
    </div>
  </div>
</template>
<script>
import { screenSize } from "@/until/index.js";
import { onMounted, unref, ref } from "vue";

export default {
  setup() {
    const homeWrap = ref(null);
    onMounted(() => {
      const el = unref(homeWrap);
      screenSize(el);
    });

    return {
      homeWrap
    };
  }
};
</script>
<style lang="stylus" scoped>
.home-page
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  .home-wrap
    width 1920px
    height 1080px
    background url(../assets/image/img/bj.jpg) no-repeat
    background-size contain
    background-position 50% 0
    overflow auto
    transform-origin 0 0
    min-height auto
    min-width auto
    .home-top
      position absolute;
      left 0
      top 0
      width 100%
      height 80px
      background-color transparent
      background url(../assets/image/img/top_nav.png) no-repeat
      background-position 65% 0
      border none
      overflow hidden
</style>
