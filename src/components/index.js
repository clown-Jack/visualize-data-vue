import bgAnimation from "./bgAnimation";
import sinan from './sinan'
const components = {
  bgAnimation,
  sinan
};

const install = (Vue={}) => {
    console.log(Vue);
  Object.keys(components).forEach(component => {
    Vue.component(components[component].name,components[component])
  });
};

export default install;
