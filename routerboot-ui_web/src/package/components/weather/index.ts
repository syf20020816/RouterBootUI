/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230331
 * @version:1.0.0
 * @type:output
 * @description:导出组件，但组件注册
 * ============================================
 */

import Weather from "./src/weather.vue";
import { componentInstaller } from "../../utils";

export const RBWeather = componentInstaller.installComponent(Weather);
