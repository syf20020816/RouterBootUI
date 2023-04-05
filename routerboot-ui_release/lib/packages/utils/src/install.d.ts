import { ComponentWithInstall } from "./installType";
/**
 * 注册组件
 * @param vueComponent
 * @returns
 */
export declare const installComponent: <T extends Record<string, any>>(vueComponent: T) => ComponentWithInstall<T>;
