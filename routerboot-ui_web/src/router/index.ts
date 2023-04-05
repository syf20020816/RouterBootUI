/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230330
 * @version:1.0.0
 * @type:file
 * @description: router的入口文件，通过引入{routes}屏蔽大量的导入语句
 * ============================================
 */

import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./routerPath";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
