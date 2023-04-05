/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230330
 * @version:1.0.0
 * @type:output
 * @description: 导出所有涉及到的TS-utils中的函数
 * ============================================
 */

import { build, buildContainer, buildWrap, when } from "./src/name";
import { installComponent } from "./src/install";
import { objToMap } from "./src/usual";
import { ComponentBuilder, componentNode } from "./src/component";
import { generateUUID } from "./src/uuid";

const nameBuilder = { build, buildContainer, buildWrap, when };
const componentInstaller = { installComponent };
const usualUser = { objToMap };
const uuidBuilder = { generateUUID };

export {
  nameBuilder,
  componentInstaller,
  usualUser,
  ComponentBuilder,
  uuidBuilder,
};
