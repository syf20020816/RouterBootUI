import '../../../common/icon/iconfont';
import { PropType } from 'vue';
import type { Weather, DayType } from './weather';
declare const _default: import("vue").DefineComponent<{
    position: {
        type: StringConstructor;
        default: string;
    };
    dayType: {
        type: PropType<DayType>;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    weather: {
        type: PropType<Weather>;
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
    temperature: {
        type: NumberConstructor;
        default: number;
    };
    btn: {
        type: StringConstructor;
        default: string;
    };
}, (_ctx: any, _cache: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("check" | "get")[], "check" | "get", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: StringConstructor;
        default: string;
    };
    dayType: {
        type: PropType<DayType>;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    weather: {
        type: PropType<Weather>;
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
    temperature: {
        type: NumberConstructor;
        default: number;
    };
    btn: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onCheck?: (...args: any[]) => any;
    onGet?: (...args: any[]) => any;
}, {
    value: string;
    position: string;
    dayType: DayType;
    weather: Weather;
    size: string;
    type: string;
    temperature: number;
    btn: string;
}>;
export default _default;
