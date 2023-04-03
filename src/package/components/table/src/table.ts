import { uuidBuilder } from "../../../utils/index";

export const buildTableColumn = (): string => {
  return "rb-column_" + uuidBuilder.generateUUID();
};
