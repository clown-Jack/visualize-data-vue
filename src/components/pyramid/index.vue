<template>
  <div class="pyramid-container">
    <div class="back_img3"></div>
    <div class="back_img"></div>
    <div class="back_img1"></div>
    <div class="back_img2"></div>

    <ul
      :class="{ first: index == 0 }"
      v-for="(item, index) in arrData"
      :key="index"
    >
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  name: "pyramid",
  setup() {
    const state = reactive({
      arrData: [
        {
          post: "技术经理",
          number: 158
        },
        {
          post: "Java工程师",
          number: 572
        },
        {
          post: "前端工程师",
          number: 826
        },
        {
          post: "项目经理",
          number: 66
        }
      ]
    });

    return {
      ...toRefs(state)
    };
  }
};
</script>
<style lang="stylus" scoped>
@keyframes trigle_move {
  0% {
    transform: rotateX(65deg) rotateZ(360deg);
  }
  100% {
    transform: rotateX(65deg) rotateZ(0deg);
  }
}
@keyframes trigle_move1 {
  0% {
    transform: rotateX(66deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(66deg) rotateZ(360deg);
  }
}
.pyramid-container
    position absolute
    left 600px
    top 150px
    width 720px
    height 500px
    .back_img
      position absolute
      top 195px
      width 100%
      height 300px
      background url(../../assets/image/img/chart2/icon_db02.png) no-repeat center
      background-size 80% 84%
      transform rotateX(0deg)
    .back_img1
      position absolute
      left: 0;
      top: 18%;
      width: 100%;
      height: 100%;
      background: url(../../assets/image/img/chart2/icon_db03.png) no-repeat center;
      transform: rotateX(65deg);
      background-size: 62%;
      animation: trigle_move 10s linear infinite;
    .back_img2
      position absolute
      top 190px
      width 100%
      height 300px
      background: url(../../assets/image/img/chart2/icon_db04.png) no-repeat center;
      transform: rotateX(66deg);
      background-size: 39%;
      animation: trigle_move1 10s linear infinite;
    .back_img3
      position absolute
      top 247px
      width 100%
      height 300px
      background: url(../../assets/image/img/chart2/icon_db01.png) no-repeat center;
      transform: rotateX(50deg);
      background-size: 65% 100%;
    .first
      list-style none
      position absolute
      left 240px
      top 100px
      width 240px
      height  240px
      transform-style preserve-3d
      perspective-origin 50% 100%
      perspective 2000px
      li
        width 100%
        height 100%
        line-height:200px
        position absolute
        left 0
        top 0px
        background-image: linear-gradient(#45fed4 1%,rgba(0,96,220,1));
        opacity: 0.8;
        &:nth-child(1)
          transform: rotateX(0deg) translateZ(-35px) scale(0.79);
        &:nth-child(2) {
            transform:translateZ(-100px) translateY(170px) rotateX(-70deg);
            height: 70px;
            line-height: 70px;
            transform-origin: 0 100%;
            clip-path: polygon(25px 0%,calc(100% - 25px) 0%,100% 100%,0% 100%);
        }
        &:nth-child(3) {
            transform: rotateX(-180deg) translateZ(100px);
        }
        &:nth-child(4) {
            height: 70px;
            line-height: 70px;
            transform-origin: 0 100%;
            transform: translateZ(-100px) translateY(-70px) rotateX(-110deg);
            clip-path: polygon(25px 0%,calc(100% - 25px) 0%,100% 100%,0% 100%);
        }
        &:nth-child(5) {
            width: 70px;
            transform-origin: 100% 100%;
            transform: translateZ(-100px) translateX(-70px) rotateY(110deg);
            clip-path: polygon(0% 25px,100% 0%,100% 100%,0% calc(100% - 25px));
        }
        &:nth-child(6) {
            width: 70px;
            transform-origin: 100% 100%;
            transform:translateZ(-100px) translateX(170px) rotateY(70deg);
            clip-path: polygon(0% 25px,100% 0%,100% 100%,0% calc(100% - 25px));
            background-image: linear-gradient(to left, rgba(0,96,220,1),#45fed4);
        }
</style>
