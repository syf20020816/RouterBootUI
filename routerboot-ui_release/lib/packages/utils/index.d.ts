/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230330
 * @version:1.0.0
 * @type:output
 * @description: 导出所有涉及到的TS-utils中的函数
 * ============================================
 */
import { ComponentBuilder } from "./src/component";
declare const nameBuilder: {
    build: (component: string, element: string) => string;
    buildContainer: (component: string) => string;
    buildWrap: (component: string, wrap: string) => string;
    when: (element: string, state: string) => string;
};
declare const componentInstaller: {
    installComponent: <T extends Record<string, any>>(vueComponent: T) => import("./src/installType").ComponentWithInstall<T>;
};
declare const usualUser: {
    objToMap: (lowMap: Object) => Map<string, string>;
};
declare const uuidBuilder: {
    generateUUID: () => string;
};
export { nameBuilder, componentInstaller, usualUser, ComponentBuilder, uuidBuilder, };
