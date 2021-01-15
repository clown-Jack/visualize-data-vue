import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import customCom from "./components";
import vueSeamlessScroll from "vue-seamless-scroll";
import vueParticles from "vue-particles";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

//全局提示框的位置
import { message } from "ant-design-vue";
message.config({
  top: `200px`
});

const app = createApp(App);
app.use(store);
app.use(router);
//全局注册组件
app.use(customCom);
app.use(vueSeamlessScroll);
app.use(Antd);
app.use(vueParticles);
app.mount("#app");
