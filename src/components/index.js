import bgAnimation from "./bgAnimation";
import sinan from "./sinan";
import sealrolls from "./sealrolls";
import pyramid from "./pyramid";
import rollarc from "./rollarc";
import biaxialBar from "./biaxialBar";
import circularBubble from "./circularBubble";

const components = {
  bgAnimation,
  sinan,
  sealrolls,
  pyramid,
  rollarc,
  biaxialBar,
  circularBubble
};

const install = (Vue = {}) => {
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });
};

export default install;
