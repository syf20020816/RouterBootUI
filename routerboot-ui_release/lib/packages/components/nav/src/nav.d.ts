export type NavType = "default" | "tabbar" | "iconOnly";
export interface NavNode {
    id: string | number;
    name: string;
    icon?: string;
    content?: string;
}
export declare const defalutNavNode: Array<NavNode>;
