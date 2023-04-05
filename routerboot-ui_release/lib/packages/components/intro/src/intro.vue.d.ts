import { PropType } from 'vue';
import { Sex } from './intro';
declare const _default: import("vue").DefineComponent<{
    sex: {
        type: PropType<Sex>;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("msg" | "detail")[], "msg" | "detail", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    sex: {
        type: PropType<Sex>;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onMsg?: (...args: any[]) => any;
    onDetail?: (...args: any[]) => any;
}, {
    name: string;
    sex: Sex;
    size: string;
    type: string;
    description: string;
}>;
export default _default;
