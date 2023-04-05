import { createApp } from "vue";
import "./style.scss";
import App from "./App.vue";
import router from "./router";
import routerbootUi from "./package/routerboot-ui";
import "./package/theme-chalk/index.scss";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.use(routerbootUi);
app.use(createPinia());
app.mount("#app");
