/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230330
 * @version:1.0.0
 * @type:
 * @description: Vue注册组件
 * ============================================
 */
import { App } from "vue";
import { ComponentWithInstall } from "./installType";
/**
 * 注册组件
 * @param vueComponent
 * @returns
 */
export const installComponent = <T extends Record<string, any>>(
  vueComponent: T
): ComponentWithInstall<T> => {
  (vueComponent as ComponentWithInstall<T>).install = (app: App) => {
    app.component(vueComponent.name, vueComponent);
  };

  return vueComponent as ComponentWithInstall<T>;
};
