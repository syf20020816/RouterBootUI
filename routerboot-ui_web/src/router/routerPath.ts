/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230330
 * @version:1.0.0
 * @type:file
 * @description: 设置router path 到 routes变量中进行统一导出
 * ============================================
 */

import { RouteRecordRaw } from "vue-router";
import TextTest from "../views/TextTest.vue";
import Install from "../views/Install.vue";
import IconTest from "../views/IconTest.vue";
import ButtonTest from "../views/ButtonTest.vue";
import WeatherTest from "../views/WeatherTest.vue";
import IntroTest from "../views/IntroductionTest.vue";
import NavTest from "../views/NavTest.vue";
import ClockTest from "../views/ClockTest.vue";
import FlexboxTest from "../views/FlexboxTest.vue";
import CodeTest from "../views/CodeTest.vue";
import TableTest from "../views/TableTest.vue";
import CalcTest from "../views/CalcTest.vue";
import EditorTest from "../views/EditorTest.vue";
import ExplainTest from "../views/ExplainTest.vue";
import Index from "../views/Index.vue";
import ContainerTest from "../views/ContainerTest.vue";
import AbbrTest from "../views/AbbrTest.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/text",
    component: TextTest,
  },
  {
    path: "/icon",
    component: IconTest,
  },
  {
    path: "/button",
    component: ButtonTest,
  },
  {
    path: "/weather",
    component: WeatherTest,
  },
  {
    path: "/intro",
    component: IntroTest,
  },
  {
    path: "/nav",
    component: NavTest,
  },
  {
    path: "/clock",
    component: ClockTest,
  },
  {
    path: "/flexbox",
    component: FlexboxTest,
  },
  {
    path: "/code",
    component: CodeTest,
  },
  {
    path: "/calc",
    component: CalcTest,
  },
  {
    path: "/table",
    component: TableTest,
  },
  {
    path: "/editor",
    component: EditorTest,
  },
  {
    path: "/explain",
    component: ExplainTest,
  },
  {
    path: "/",
    component: Index,
  },
  {
    path: "/container",
    component: ContainerTest,
  },
  {
    path: "/abbr",
    component: AbbrTest,
  },
  {
    path: "/install",
    component: Install,
  },
];
