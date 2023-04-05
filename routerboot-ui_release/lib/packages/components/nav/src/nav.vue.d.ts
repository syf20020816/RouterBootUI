import { PropType } from 'vue';
import { NavType, NavNode } from './nav';
declare const _default: import("vue").DefineComponent<{
    navType: {
        type: PropType<NavType>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    navNodeList: {
        type: {
            (arrayLength: number): NavNode[];
            (...items: NavNode[]): NavNode[];
            new (arrayLength: number): NavNode[];
            new (...items: NavNode[]): NavNode[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: NavNode[];
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "chat")[], "click" | "chat", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    navType: {
        type: PropType<NavType>;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    navNodeList: {
        type: {
            (arrayLength: number): NavNode[];
            (...items: NavNode[]): NavNode[];
            new (arrayLength: number): NavNode[];
            new (...items: NavNode[]): NavNode[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: NavNode[];
    };
}>> & {
    onClick?: (...args: any[]) => any;
    onChat?: (...args: any[]) => any;
}, {
    navType: NavType;
    type: string;
    navNodeList: NavNode[];
}>;
export default _default;
