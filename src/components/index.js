import bgAnimation from "./bgAnimation";
import sinan from "./sinan";
import sealrolls from "./sealrolls";
import pyramid from "./pyramid";

const components = {
  bgAnimation,
  sinan,
  sealrolls,
  pyramid
};

const install = (Vue = {}) => {
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name, components[component]);
  });
};

export default install;
