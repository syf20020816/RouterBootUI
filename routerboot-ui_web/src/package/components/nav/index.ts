/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230401
 * @version:1.0.0
 * @type:output
 * @description:导出组件，但组件注册
 * ============================================
 */

import Nav from "./src/nav.vue";
import { componentInstaller } from "../../utils";

export const RBNav = componentInstaller.installComponent(Nav);
