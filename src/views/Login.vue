<template>
  <div class="login-page">
    <div class="login-contain">
      <div class="login-animation">
        <div class="login-form">
          <h2>数据可视化大屏展示</h2>
          <div class="form-item">
            <UserOutlined class="form-icon" />
            <input
              type="text"
              placeholder="请输入用户名"
              v-model="username"
              autocomplete="off"
            />
          </div>
          <div class="form-item">
            <UnlockOutlined class="form-icon" />
            <input
              type="password"
              placeholder="请输入密码"
              v-model="password"
              autocomplete="off"
            />
          </div>
          <a-button
            class="login-btn"
            @click="handlerClick"
            :disabled="isDisabled"
          >
            登录
          </a-button>
          <div class="login-tip">默认用户名:admin,密码:123456</div>
        </div>
      </div>
    </div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#6495ED"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>

    <bgAnimation />
  </div>
</template>

<script>
import { UserOutlined, UnlockOutlined } from "@ant-design/icons-vue";
import { reactive, toRefs, computed } from "vue";
import router from "@/router";
import { message } from "ant-design-vue";
export default {
  components: {
    UserOutlined,
    UnlockOutlined
  },
  setup() {
    const state = reactive({
      username: "admin",
      password: "123456"
    });
    const handlerClick = () => {
      const { push } = router;
      if (state.username == "admin" && state.password == "123456") {
        push("/home");
      } else {
        message.error("请输入正确的用户名和密码");
      }
    };
    const isDisabled = computed(() => {
      return !(state.username && state.password);
    });
    return {
      ...toRefs(state),
      handlerClick,
      isDisabled
    };
  }
};
</script>
<style lang="stylus" scoped>
input::-webkit-input-placeholder {
  color: #d3d7f7;
}
@keyframes keep {
  0% {
    transform translate(-50%, -50%)
  }
  40% {
    opacity 1
  }
  60% {
    opacity 1
  }
  100% {
    transform translate(-50%, -40%)
  }
}
.login-page
  .login-contain
     position absolute
     width 100%
     height 100%
     top 0
     left 0
     z-index 100
     .login-animation
        position absolute
        left 50%
        top 50%
        z-index 101
        transform translate(-50%,-50%)
        animation keep 2s 3s ease-in infinite alternate
        .login-form
           width 530px
           background rgba(36, 36, 85, 0.5)
           color #ffffff
           letter-spacing 2px
           margin 0 auto
           padding 35px 30px 25px
           box-shadow 0 0 25px rgba(255, 255, 255, 0.5)
           border-radius 10px
           h2
             text-align center
             font-size 26px
             font-weight normal
             padding-bottom 35px
             color #d3d7f7
           .form-item
             display flex
             align-items center
             margin-bottom 25px
             border-bottom 1px solid #d3d7f7
             .form-icon
               color #d3d7f7
               margin-right 10px
             input
               font-size 16px
               line-height 30px
               width 100%
               color #d3d7f7
               outline none
               border none
               background-color rgba(0, 0, 0, 0)
               padding 10px 0
           .login-btn
             width 100%
             border 1px solid #d3d7f7
             font-size 16px
             color #d3d7f7
             background transparent
             outline none
             height 50px
             padding 12px 15px
             border-radius 4px
             margin-top 10px
             &:hover
               color #fff
               background #0090ff
               border-color #0090ff
           .login-tip
             font-size 12px
             padding-top 20px
</style>
