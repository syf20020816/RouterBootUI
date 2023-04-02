/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230331
 * @version:1.0.0
 * @type:output
 * @description:导出组件，但组件注册
 * ============================================
 */

import Introduction from "./src/intro.vue";
import { componentInstaller } from "../../utils";

export const RBIntroduction = componentInstaller.installComponent(Introduction);
