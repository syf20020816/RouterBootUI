/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230330
 * @version:1.0.0
 * @type:function
 * @description: TS构建class，id等名称
 * ============================================
 */
/**
 * 构建Container
 * @param component
 * @returns
 */
export declare const buildContainer: (component: string) => string;
/**
 * 构建Wrap
 * @param component
 * @param wrap
 * @returns
 */
export declare const buildWrap: (component: string, wrap: string) => string;
/**
 * 构建元素
 * @param component
 * @param element
 * @returns
 */
export declare const build: (component: string, element: string) => string;
export declare const when: (element: string, state: string) => string;
