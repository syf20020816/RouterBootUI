/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230401
 * @version:1.0.0
 * @type:output
 * @description:导出组件，但组件注册
 * ============================================
 */

import Code from "./src/code.vue";
import { componentInstaller } from "../../utils";

export const RBCode = componentInstaller.installComponent(Code);
