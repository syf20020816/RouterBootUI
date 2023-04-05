export type NavType = "default" | "tabbar" | "iconOnly";

export interface NavNode {
  id: string | number;
  name: string;
  icon?: string;
  content?: string;
}

export const defalutNavNode: Array<NavNode> = [
  {
    id: 0,
    name: "Home",
    icon: "rb-icon-home",
    content: "this is a nav content",
  },
  {
    id: 1,
    name: "WorkSpace",
    icon: "rb-icon-applicationgroup",
  },
  {
    id: 2,
    name: "Square",
    icon: "rb-icon-smile-fill",
  },
  {
    id: 3,
    name: "User",
    icon: "rb-icon-wode",
  },
  {
    id: 4,
    name: "Settings",
    icon: "rb-icon-cog",
  },
];
