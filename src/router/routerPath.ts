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
import IconTest from "../views/IconTest.vue";
import ButtonTest from "../views/ButtonTest.vue";
import WeatherTest from "../views/WeatherTest.vue";
import IntroTest from "../views/IntroductionTest.vue";
import NavTest from "../views/NavTest.vue";
import ClockTest from "../views/ClockTest.vue";
import FlexboxTest from "../views/FlexboxTest.vue";
import CodeTest from "../views/CodeTest.vue";

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
];