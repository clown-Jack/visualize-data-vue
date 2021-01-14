<template>
    <div class="sn-container">
       <div class="sn-conntain">
           <div class="sn-title">司南排名图</div>
           
       </div>
    </div>
</template>
<script>
export default {
    name:"sinan"
}
</script>
<style lang="stylus" scoped>
.sn-container
  position absolute
  left 50px
  top 110px
  width 500px
  height 550px
  border 2px solid rgba(92,255,255,0.1)
  background  rgba(10,106,255,0.1) url(../../assets/image/img/wg.png) repeat 50% 50% !important;
  background-blend-mode screen
  .sn-conntain
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    .sn-title
      position absolute
      height 26px
      font-size 16px
      color #00c2ff
      line-height 26px
      padding 0 0 0 20px
      left 10px
      right 10px
      top 10px
      &:before {
        content ""
        position: absolute
        left 0
        top 50%
        margin-top -7px
        width 14px
        height 14px
        background url(../../assets/image/img/sn-title.png) no-repeat 0% 0%
      }
</style>