export interface componentNode {
    key: string;
    value: any;
    description: string;
}
/**
 * 组件get方法构造器
 */
export declare class ComponentBuilder {
    private componentNodeList;
    private tmpNode;
    constructor();
    getComponentNodeList: () => componentNode[];
    /**
     * 返回原始对象This
     */
    and: () => ComponentBuilder;
    build: () => ComponentBuilder;
    /**
     * 清除tmpNode
     */
    private clean;
    /**
     * 设置key
     * @param key
     * @returns
     */
    key: (key: string) => ComponentBuilder;
    /**
     * 设置value
     * @param value
     * @returns
     */
    value: (value: any) => ComponentBuilder;
    /**
     * 设置description
     * @param description
     * @returns
     */
    description: (description: string) => ComponentBuilder;
}
