/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230403
 * @version:1.0.0
 * @type:output
 * @description:导出组件，但组件注册
 * ============================================
 */

import Editor from "./src/editor.vue";
import { componentInstaller } from "../../utils";

export const RBEditor = componentInstaller.installComponent(Editor);
