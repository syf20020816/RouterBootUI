/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230330
 * @version:1.0.0
 * @type:function
 * @description: TS构建class，id等名称
 * ============================================
 */

let namespace: string = "rb";
let commonSeparator: string = "-";
let outterSeparator: string = "_";
let elementSeparator: string = "--";
let statePrefix: string = "is-";

/**
 * 构建Container
 * @param component
 * @returns
 */
export const buildContainer = (component: string): string => {
  return (
    namespace + commonSeparator + component + outterSeparator + "container"
  );
};
/**
 * 构建Wrap
 * @param component
 * @param wrap
 * @returns
 */
export const buildWrap = (component: string, wrap: string): string => {
  return (
    namespace +
    commonSeparator +
    component +
    commonSeparator +
    wrap +
    outterSeparator +
    "wrap"
  );
};

/**
 * 构建元素
 * @param component
 * @param element
 * @returns
 */
export const build = (component: string, element: string): string => {
  return namespace + commonSeparator + component + elementSeparator + element;
};

export const when = (element: string, state: string): string => {
  return state != "" ? statePrefix + element + commonSeparator + state : "";
};
