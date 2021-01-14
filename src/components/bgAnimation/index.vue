<template>
  <ul class="bg-container">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>
<script>
export default {
  name:'bgAnimation'
};
</script>
<style lang="stylus" scoped>
.bg-container
  position fixed
  width 100%
  height 100%
  background rgba(0, 134, 179, .5)
  left 0
  top 0
  li
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index 0
    animation imgAnimation 48s linear infinite 0s
    background-repeat none 
    background-size cover
    background-position 50% 50%
    &:nth-child(1) {
      background-image: url(../../assets/image/img/bg-4.jpg);
    }
    &:nth-child(2) {
      background-image: url(../../assets/image/img/bg-5.jpg);
      animation-delay: 12s;
    }
    &:nth-child(3) {
      background-image: url(../../assets/image/img/bg-2.jpg);
      animation-delay: 24s;
    }
    &:nth-child(4) {
      background-image: url(../../assets/image/img/bg-4.jpg);
      animation-delay: 36s;
    }
@keyframes imgAnimation {
  0% {
    opacity 0
    animation-timing-function ease-in
  }
  8% {
    opacity 1;
    transform scale(1.1)
    animation-timing-function: ease-out
  }
  17% {
    opacity 1;
    transform: scale(1.2)
  }
  25% {
    opacity 0
    transform scale(1.3)
  }
  100% {
    opacity 0
  }
}
</style>
