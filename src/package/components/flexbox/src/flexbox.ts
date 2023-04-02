/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230401
 * @version:1.0.0
 * @type:interface
 * @description:不启用后续版本更新
 * ============================================
 */

export interface Flexbox {
  id: string | number;
  name: string;
  content?: string | any;
}

export const defaultFlexboxList: Array<Flexbox> = [
  {
    id: 0,
    name: "Consistency1",
    content:
      " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;",
  },
  {
    id: 1,
    name: "Consistency2",
    content:
      " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;",
  },
  {
    id: 2,
    name: "Consistency3",
    content:
      " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;",
  },
];
