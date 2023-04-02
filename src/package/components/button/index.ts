/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230330
 * @version:1.0.0
 * @type:output
 * @description:导出组件，但组件注册
 * ============================================
 */

import Button from "./src/button.vue";
import { componentInstaller } from "../../utils";

export const RBButton = componentInstaller.installComponent(Button);
