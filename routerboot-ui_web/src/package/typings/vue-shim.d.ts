/**
 * 声明文件，帮助TS解析vue
 */

declare module "*.vue" {
  //所有的通过ts导出的文件如xxx.vue都会通过这个方法
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent> & {
    install(app: App): void;
  };
  export default component;
}
