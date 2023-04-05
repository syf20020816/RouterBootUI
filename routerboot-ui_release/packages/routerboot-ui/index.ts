import { App } from "vue";
import { ComponentList } from "./src/components";

const install = (app: App) => {
  for (const component of ComponentList) {
    app.component(component.name, component);
  }
};

export default {
  install,
};
