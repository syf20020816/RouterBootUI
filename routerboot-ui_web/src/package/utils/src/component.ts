export interface componentNode {
  key: string;
  value: any;
  description: string;
}
/**
 * 组件get方法构造器
 */
export class ComponentBuilder {
  private componentNodeList: Array<componentNode>;
  private tmpNode: componentNode;
  constructor() {
    this.componentNodeList = [];
    this.tmpNode = {
      key: "",
      value: null,
      description: "",
    };
  }
  public getComponentNodeList = () => {
    return this.componentNodeList;
  };
  /**
   * 返回原始对象This
   */
  public and = (): ComponentBuilder => {
    this.componentNodeList.push(this.tmpNode);
    this.clean();
    return this;
  };

  public build = (): ComponentBuilder => {
    this.clean();
    return this;
  };

  /**
   * 清除tmpNode
   */
  private clean = (): void => {
    this.tmpNode = {
      key: "",
      value: null,
      description: "",
    };
  };
  /**
   * 设置key
   * @param key
   * @returns
   */
  public key = (key: string): ComponentBuilder => {
    this.tmpNode.key = key;
    return this;
  };
  /**
   * 设置value
   * @param value
   * @returns
   */
  public value = (value: any): ComponentBuilder => {
    this.tmpNode.value = value;
    return this;
  };
  /**
   * 设置description
   * @param description
   * @returns
   */
  public description = (description: string): ComponentBuilder => {
    this.tmpNode.description = description;
    return this;
  };
}
