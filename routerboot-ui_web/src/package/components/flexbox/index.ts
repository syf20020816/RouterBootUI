/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230402
 * @version:1.0.0
 * @type:output
 * @description:导出组件，但组件注册
 * ============================================
 */

import Flexbox from "./src/flexbox.vue";
import FlexboxItem from "./src/flexboxItem.vue";
import { componentInstaller } from "../../utils";

export const RBFlexbox = componentInstaller.installComponent(Flexbox);
export const RBFlexboxItem = componentInstaller.installComponent(FlexboxItem);
