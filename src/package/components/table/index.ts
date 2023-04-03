/**
 * ============================================
 * @author:syf20020816@outlook.com
 * @since:20230403
 * @version:1.0.0
 * @type:output
 * @description:导出组件，但组件注册
 * ============================================
 */

import Table from "./src/table.vue";
import TableItem from "./src/tableItem.vue";
import { componentInstaller } from "../../utils";

export const RBTableItem = componentInstaller.installComponent(TableItem);
export const RBTable = componentInstaller.installComponent(Table);
