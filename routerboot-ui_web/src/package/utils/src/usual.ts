/**
 * Object 转 Map
 * @param lowMap
 * @returns
 */
export const objToMap = (lowMap: Object): Map<string, string> => {
  let keys = Object.keys(lowMap);
  let values = Object.values(lowMap);
  let row: Map<string, string> = new Map();
  for (let i = 0; i < keys.length; i++) {
    row.set(keys[i], values[i]);
  }

  return row;
};
